#!/usr/bin/node

const stdin = process.stdin,
      stdout = process.stdout;

stdin.resume();
stdin.setEncoding('utf-8');

stdin.on('data',(data)=>{
  stdout.write(data);
});

global.setTimeout(()=>{
  stdin.removeAllListeners();
},3000);
stdin.on('end',()=>{
  process.exit();
});
