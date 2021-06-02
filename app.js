const express = require('express')
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')

require('dotenv').config()

const routes = require('./routes/index.route')
//const port = process.env.PORT || 4000
const port = process.argv.length > 2 ? process.argv[2] : process.env.PORT

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Blockchain web API!')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', routes)

const server = http.createServer(app)

server.on('listening', function () {
  console.log(`HTTP server listening at port ${port}`)
})

server.listen(port)

module.exports = { app }
