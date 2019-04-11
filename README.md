![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: https://github.com/401-advanced-javascript-billybunn/lab-18/pull/1
<!-- travis build -->
[2]: https://travis-ci.com/401-advanced-javascript-billybunn/lab-18/builds/107906598
<!-- back-end -->
[3]: http://xyz.com
<!-- front-end -->
[4]: http://xyz.com
<!-- swagger -->
[5]: http://xyz.com
<!-- jsdoc-->
[6]: heroku-link/docs 

## Socket.io
[![Build Status](https://travis-ci.com/401-advanced-javascript-billybunn/lab-18.svg?branch=working)](https://travis-ci.com/401-advanced-javascript-billybunn/lab-18)

### Author: Billy Bunn

### Links and Resources
* [PR][1]
* [travis][2]
<!-- (when applicable) -->
<!-- * [back-end][3] -->
<!-- (when applicable) -->
<!-- * [front-end][4] -->

<!-- #### Documentation -->
<!-- API assignments only -->
<!-- * [swagger][5] -->
<!-- (All assignments) -->
<!-- * [jsdoc][6] -->

### Modules
#### `app/app.js`
socket.io client that connects to the socket.io server over port 3000. Performs an operation in the file system and emits an event to the socket.io server depending on the result of that operation.
* It requires the `socket.io-client` module and uses the `socket.connect` method to create a socket connection to `http://localhost:3000`.
* It requires the built-in node `fs` and `util` modules in order to modify the file system and promisify functions, respectively.
* When the file is run through the CLI (`node app/app.js files/test.txt`), it runs the `alterfile(file)` function. This functions does the following:
  * Uses `read` to call the promisify-ed `fs.readFile` function, which takes a filepath to read as a parameter and returns a buffer of the data in that file.
  * Uses the `uppercase` helper function to take the returned buffer data from the read file as a parameter and return a buffer of the same content in uppercase characters.
  * Uses `write`to call the promisify-ed `fs.writeFile` function, which takes a filepath and buffer data as parameters and writes new file with the filepath of `file` with the `contents`.
  * **If all these operations are successful/resolved**, it emits a "success" event to the socket.io server; `socket.emit('file-save', payload)`.
  * **If an error is caught at any point**, it emits an "error" event to the socket.io server; `socket.emit('file-error', payload)`.

#### `server/`
socket.io server that opens a connection over port 3000. Receives events emitted by sockets and broadcasts certain events to other sockets.
* It requires the `socket.io` module to open a connection for any sockets to `http://localhost:3000`.
* When a socket is connected, logs `Connected: <socket id>` to the console.
* When a socket is disconnected, logs `Disconnected: <socket id>` to the console.
* When a `file-error` event is heard, broadcasts `success` to all sockets; `socket.broadcast.emit('success', payload)`
* When a `file-save` event is heard, broadcasts `err` to all sockets; `socket.broadcast.emit('err', payload)`

#### `logger/`
socket.io client that connects to the socket.io server over port 3000. Listens for broadcasts from the socket.io server.
* It requires the `socket.io-client` module and uses the `socket.connect` method to create a socket connection to `http://localhost:3000`.
* When a `success` event is heard, logs `heard success <payload>` to the console.
* When an `err` event is heard, logs `heard error <payload>` to the console.


### Setup
<!-- #### `.env` requirements -->
* `npm i` - install dependencies
<!-- * `PORT` - assign a port number -->
<!-- * `MONGODB_URI` - URL to the running mongo instance/db -->


#### Running the app
<!-- * `npm start` -->
* `npm node app/app.js files/test.txt`

<!-- * Endpoint: `/` -->
<!-- * Endpoint: `/foo/bar/` -->
  <!-- * Returns a JSON object with abc in it. -->
<!-- * Endpoint: `/bing/zing/` -->
  <!-- * Returns a JSON object with xyz in it. -->
  
#### Tests
* To run tests, enter the following in the CLI:
  * `npm run test`
  * `npm run lint`
<!-- * What assertions were made? -->
<!-- * What assertions need to be / should be made? -->

#### UML
##### Final Diagram
![UML Diagram 1](https://i.imgur.com/BZvYdbD.jpg)
<!-- --- -->
<!-- ##### Lecture Diagram -->
<!-- ![UML Diagram 2](https://i.imgur.com/JWXXXMh.jpg) -->
