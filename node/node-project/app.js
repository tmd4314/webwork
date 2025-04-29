const express = require('express')
const app = express()
const port = 3000

let data = [
            {
              "id": "1",
              "first_name": "Massimiliano",
              "last_name": "Rosoni",
              "email": "mrosoni0@ibm.com",
              "salary": "$9.23",
              "department_id": 10,
              "job_id": "it"
            },
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
              "id": "4",
              "first_name": "길동",
              "last_name": "Loton",
              "email": "eloton3@dagondesign.com",
              "salary": "$3.38",
              "department_id": 10,
              "job_id": "it"
            },
            {
              "id": "5",
              "first_name": "Emmalee",
              "last_name": "Laboune",
              "email": "elaboune4@salon.com",
              "salary": "$8.40",
              "department_id": 20,
              "job_id": "sales"
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
              "id": "7",
              "first_name": "Robb",
              "last_name": "Gauche",
              "email": "rgauche6@fc2.com",
              "salary": "$8.09",
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
              "id": "9",
              "first_name": "Odilia",
              "last_name": "Paye",
              "email": "opaye8@rakuten.co.jp",
              "salary": "$6.65",
              "department_id": 20,
              "job_id": "it"
            },
            {
              "id": "10",
              "first_name": "유미",
              "last_name": "김",
              "job_id": "it",
              "department_id": 20,
              "salary": "1000",
              "email": "a@a.a"
            },
            {
              "id": "11",
              "first_name": "aa",
              "last_name": "aa",
              "email": "a@a.a",
              "phone_number": "",
              "hire_date": "",
              "job_id": "it",
              "salary": "11",
              "commission_pct": "",
              "manager_id": "",
              "department_id": 10
            },
            {
              "id": "12",
              "first_name": "bb",
              "last_name": "bb",
              "email": "a@a.a",
              "phone_number": "",
              "hire_date": "",
              "job_id": "it",
              "salary": "11",
              "commission_pct": "",
              "manager_id": "",
              "department_id": 10
            }
          ] //emp.json에서 emp 배열만 가져오기

app.get('/emp', (req, res) => {
  res.send(data)
})

// 부서가 10번인 첫번째 사원
app.get('/find', (req, res) => {
  const result = data.find(emp => emp.department_id === 10);
  res.send(result);
})

// job_id가 'it'인 사원만 조회
app.get('/filter', (req, res) => {
  const result = data.filter(emp => emp.job_id === 'it');
  res.send(result);
})

//first_name 순으로 정렬
app.get('/sort', (req, res) => {
  const result = [...data].sort((a, b) => a.first_name.localeCompare(b.first_name));
  res.send(result);
})

app.get('/', (req, res) => {
  res.send('hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
