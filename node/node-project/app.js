const express = require('express')
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
      "id": "a18e",
      "first_name": "a"
    },
    {
      "id": "803e",
      "first_name": "a"
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
  
app.get('/emp', (req, res) => {
  res.send(data)
})

// 부서가 10번인 첫번째 사원 return
app.get('/find', (req, res) => {
  res.send('find hello')
})

// job_id가 'it'인 사원만 조회
app.get('/filter', (req, res) => {
  res.send('filter hello')
})

// firstname 순으로 정렬
app.get('/sort', (req, res) => {
  res.send('sort hello')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
