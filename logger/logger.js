'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('err', payload => {
  console.log('heard error', payload);
});

socket.on('success', payload => {
  console.log('heard success', payload);
});