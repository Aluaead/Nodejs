#!/usr/bin/node

const http = require('http'),
      log = console.log,
      fs = require('fs');
http.createServer((req,res)=>{
  log(req);
  res.end('hello world!');
}).listen(8080);
