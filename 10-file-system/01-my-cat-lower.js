#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;
var fid = fs.openSync(file,'r');

var len = fs.statSync(file).size;

var buf = new Buffer(len);
fs.readSync(fid,buf,0,len,0);
console.log(buf.toString('utf-8'));

fs.closeSync(fid);


