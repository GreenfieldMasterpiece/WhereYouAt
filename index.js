const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const axios = require('axios')
const db = require('./database/index.js')
const router = require('./database/routers.js');

let app = express();

var http = require('http').Server();

app.use(bodyParser.json());

app.use(morgan('dev'))

app.use(express.static(__dirname + '/client/dist/'));

app.use('/whereyouat', router)

// route handler will use /chat and serve the page with the chat box

let port = 3000;

var server = app.listen(port, () => {console.log('Listening on port ' + port)})

var io = require('socket.io').listen(server);

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// creating connection for socket.io
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('CHAT MESSAGE IS: ', msg);
    io.emit('chat message', msg);
  });
});