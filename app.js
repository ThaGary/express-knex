const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const queries = require('./queries')
const config = require('./knexfile')
const bodyParser = require('body-parser')
var cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())

app.listen(port)

app.get('/', (req, res) => {
    queries.getAll().then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})

app.post('/', (req,res) => {
    queries.createStudent(req.body).then(students => res.send(students))
})
