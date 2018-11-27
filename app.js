const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const queries = require('./queries')
const config = require('./knexfile')

app.listen(port)

app.get('/', (req, res) => {
    queries.getAll().then(response => res.send(response))
})