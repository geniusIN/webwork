const express = require('express')

// multer(첨부파일)
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'c:/Temp/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


// express instance 생성
const app = express()
const port = 80

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

let boards = [
  {id:1, title:"야당", content:"야당..."},
  {id:2, title:"터미네이터", content:"미래의..."}

] //id, title, content

// 로그 미들웨어 morgan
const morgan = require('morgan')
app.use(morgan('[:date[iso]] :method :url :remote-addr'))

// 첨부파일 라우트 설정: 미들웨어 밑에!
app.get('/download', (req, res, next) => {
  const filepath = 'C:/Temp/uploads/RiotClientServices.exe'; 
  const downname = 'RiotClientServices.exe'; 
  res.setHeader('Content-Disposition', `attachment; filename=${downname}`); // 이게 핵심 
  res.sendFile(filepath);
});  

app.post('/profile', upload.single('avatar'), function (req, res) {
  console.log(req.file.size);
  console.log(req.file.filename);
  console.log(req.file.originalname);
  res.send("ok");
})


// 라우트 설정

app.get('/',(req, res)=>{
  res.send("hello!!");
})

// 전체 조회
app.get('/board', (req, res)=>{
  res.send(boards);
})

// 단건 조회


// 등록
app.post('/board',(req, res)=>{
  const board = req.body;   // 자바의 VO랑 비슷함
  boards.push(board);
  console.log("받은 파라미터", board);
  res.send(board);
})

// 수정
app.put('/board/:id',(req, res)=>{
  const id = req.params.id; // 변수 id에 요청 파라미터 중 id를 저장
  const board = req.body; // body: 데이터

  //find >>> idx
  const idx = boards.findIndex((d)=>d.id == id) // boards 배열을 도는데, 객체의 id가 위에서 정의한 변수 id와 일치하는 객체를 찾으면 index를 반환해서 변수 idx에 저장
  if(idx >= 0) {
  boards[idx] = board; // boards의 idx번째 객체에 board를 저장.
  res.send(board)
  } else {
    res.send("not found")
  }

})

// 삭제
app.delete('/board/:id', (req, res)=> {
  const id = req.params.id;
  // const idx = boards.findIndex((d)=>d.id == id)        // 원본을 바로 지우는 건 위험할 수 있다.
  // if(idx >= 0) {
    // boards.splice(idx, 1);
    boards = boards.filter(d => d.id != id)
    res.send(boards)
  // } else {
  //   res.send("not found")
  // }
})

let emps = [{id:0, name:"길동"},{id:1, name:"순신"}]
//route(): 같은 리소스(url) method 타입별로 묶어서 라우트 지정
app.route('/emp')
   .get((req, res) => {res.send(emps)} )
   .post( (req, res) => {res.send(req.body)} )
   .put( (req, res) => {res.send(req.body)} )
   .delete( (req, res) => {res.send(req.id)} )

   // Router를 이용하여 모듈(파일) 분리하여 리소스별 라우트 지정
app.use( '/product', require('./routes/product') )
app.listen(port, ()=>{
  console.log(`http://localhost:${port} 서버 실행됨!`)
});