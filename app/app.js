'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const read = (file) => readFile(file);
const write = (file, buffer) => writeFile(file, buffer);
const uppercase = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());

const alterFile = (file) => {
  read(file)
    .then(buffer => uppercase(buffer))
    .then(buffer => write(file, buffer))
    .then(success => {
      let payload = JSON.stringify({
        status: 1,
        file: file,
        text: 'saved properly',
      });
      socket.emit('file-save', payload);
    })

    .catch(error => {
      let payload = JSON.stringify({
        status: 0, 
        file: file, 
        text: error.message,
      });
      socket.emit('file-error', payload);
    });

};

let file = process.argv.slice(2).shift();
alterFile(file);
