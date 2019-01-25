const http = require('http');
const fs = require('fs');
const router = require('./src/js/router');


const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((request, response) => {

  // ROUTER.JS METHOD //
  router.homeRoute(request, response);
  


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});