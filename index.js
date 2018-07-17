const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const axios = require('axios')
const db = require('./database/index.js')
const router = require('./database/routers.js')


let app = express()

app.use(bodyParser.json());

app.use(morgan('dev'))

app.use(express.static(__dirname + '/client/dist/'))
app.use('/whereyouat', router)

app.get('/', (req, res) => {
  res.send('Connection working')
})


let port = 3000

app.listen(port, () => {console.log('Listening on port ' + port)})
