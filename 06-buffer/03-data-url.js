#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

var filename=process.argv[2];

var buf = fs.readFileSync(filename);
var dataURL='data:image/png:base64,'+buf.toString('base64');

var html = '<!DOCTYPE html><html><head><head><body>hello world</body></html>';

http.createServer((req,res)=>{
  res.end('<!DOCTYPE html><html><head><head><body><h1>hello world</h1><img src = "'+dataURL+'"</body></html>')
}).listen(8080);
