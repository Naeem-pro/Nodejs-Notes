//*******************************HTTP module************************************

const { chownSync, readFileSync } = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  //server is has EventEmitter, holds all capabilites of EventEmitter class
  if (req.url == "/") {
    res.write("Hello world");
    res.end();
  }
});

server.listen(3000);

//In the real world we will not use this http module. Beacuse the addition of more routes make code complex. Hence we use express.
//Express gives our application a clean structure to handle various routes. Internally express is build on the top of http node module
