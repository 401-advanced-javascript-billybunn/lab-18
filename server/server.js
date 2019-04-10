'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);
  socket.on('file-error', (payload) => {
    console.log('heard a file-error', payload);
    // socket.broadcast.emit('message', payload);
  });
  
});