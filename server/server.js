'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);

  socket.on('file-error', (payload) => {
    console.log('ERROR:', payload);
    // socket.broadcast.emit('message', payload);
  });

  socket.on('file-save', (payload) => {
    console.log('SUCCESS:', payload);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected', socket.id);
  });

});

