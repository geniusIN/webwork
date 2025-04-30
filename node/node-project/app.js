const express = require('express')
const { param } = require('../express-app/routes')
const app = express()
const port = 3000

let data = [
    {
      "id": "2",
      "first_name": "Rikki",
      "last_name": "Red",
      "email": "rred1@nps.gov",
      "salary": "$9.96",
      "department_id": 20,
      "job_id": "sales"
    },
    {
      "id": "3",
      "first_name": "Datha",
      "last_name": "Loosemore",
      "email": "dloosemore2@behance.net",
      "salary": "$6.59",
      "department_id": 30,
      "job_id": "it"
    },
    {
      "id": "6",
      "first_name": "Michal",
      "last_name": "Ivanyushkin",
      "email": "mivanyushkin5@hao123.com",
      "salary": "$8.21",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "8",
      "first_name": "Ange",
      "last_name": "Leon",
      "email": "aleon7@ucla.edu",
      "salary": "$0.33",
      "department_id": 10,
      "job_id": "sales"
    },
    {
      "id": "",
      "first_name": "유미",
      "last_name": "김",
      "job_id": "it",
      "department_id": 20,
      "salary": "1000",
      "email": "a@a.a"
    },
    {
      "id": "1313",
      "first_name": "13",
      "last_name": "1313",
      "job_id": "it",
      "salary": "13"
    },
    {
      "id": "7",
      "first_name": "Robb",
      "last_name": "Gauche",
      "email": "rgauche6@fc2.com",
      "salary": "$8.09",
      "department_id": 10,
      "job_id": "it"
    },
    {
      "id": "214",
      "first_name": "124",
      "last_name": "412",
      "email": "214"
    }
  ]
  
  app.get('/', (req, res) => {
    res.send('hello')
  })

// 전체 조회
app.get('/emp', (req, res) => {
  res.send(data)
})

// 단건 조회
app.get('/emp/:id', (req, res) => {
  let id = req.params.id
  let result = data.find((d)=>d.id==id)
  if(result)
    res.send(result)
  else
    res.send("not found")
})

// 부서가 10번인 첫번째 사원 return       find?departmentId=10
app.get('/find', (req, res) => {
  let departmentId = req.query.departmentId
  let result = data.filter((emp)=>emp.department_id==departmentId)
  if(result)
    res.send(result)
  else
    res.send("그런 부서는 없어요.")
})

// job_id가 'it'인 사원만 조회
app.get('/filter', (req, res) => {
  let jobId = req.query.jobId

  let result = data.filter((emp)=>emp.job_id==jobId)

  res.send(result)
})

// firstname 순으로 정렬
app.get('/sort', (req, res) => {
  res.send('sort hello')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
