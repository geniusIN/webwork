//비동기 : ajax, axios(fetch) >>> 서버 요청후 기다리지 않고 넘어감.
// axios = require('axios')

// function getBoard(){
//   axios("/api/board/1")
//   .then(res => console.log("2",res.data.title))
// }

// getBoard();
// console.log("1","the end");

//동기 : async, await >>> 서버 응답이 올 때까지 기다림.
axios = require('axios')

async function getBoard(){
  let res = await axios.get("/api/board/1")
  console.log("2:",res.data.title);
}

getBoard();
console.log("1","the end");