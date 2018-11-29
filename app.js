const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const queries = require('./queries')
const config = require('./knexfile')
const bodyParser = require('body-parser')
const cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())

app.listen(port)

app.get('/', (req, res) => {
    queries.getAll().orderBy('id', 'asce')
    .then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id)
    .then(students => res.send(students))
})

app.post('/', (req,res) => {
    queries.createStudent(req.body)
    .then(students => res.send(students))
})

app.delete('/:id', (req, res, next) => {
    queries.deleteStudent(req.params.id)
    .then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    queries.updateStudent(req.params.id, req.body)
    .then(updatedStudents => res.json(updatedStudents))
})