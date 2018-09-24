#!/usr/bin/node

process.stdin.resume();

process.on('SIGINT',()=>{
  console.log('you have press Ctrl+C');
  process.exit();
});
process.on('SIGSTP',()=>{
  console.log('you have process Ctrl+D');
});
