const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const axios = require('axios')
const db = require('./database/index.js')
const router = require('./database/routers.js');
const chatRouter = require('./server/socket-io/routers.js');

let app = express();

var http = require('http').Server();

app.use(bodyParser.json());

app.use(morgan('dev'))

app.use(express.static(__dirname + '/client/dist/'));

app.use('/whereyouat', router)

app.use('/chat', chatRouter)

// route handler will use /chat and serve the page with the chat box

const port = process.env.PORT || 3000
var server = app.listen(port, () => {console.log('Listening on port ' + port)})
var io = require('socket.io').listen(server);

// Chatroom
var numUsers = 0;

// creating connection method for socket.io to browser
io.on('connection', function(socket){
  numUsers++;
  console.log(' %s sockets connected', io.engine.clientsCount);

  // listen for incoming connect event
  io.sockets.emit('user count', numUsers);

  socket.on("disconnect", () => {
    io.sockets.emit("disconnect", --numUsers);
    console.log('user disconnected:', numUsers);
  });

  

  // when the client emits 'chat message', this listens to a 'new message event' and executes
  socket.on('chat message', (msg) => {
    //console.log('msg being receieved: ', msg);
    // we tell the client to execute the new message
    io.emit('chat message', msg)

    // we need to emit the name back to the client 
  })
  // we are going to create sessions in order to remember user information

});

