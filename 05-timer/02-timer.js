#!/usr/bin/node

const log = console.log;

log('start...');

const timeID = setInterval(loop,500);
timeID.unref();

function loop(){
  log('I will loop forever!');
}

setTimeout(()=>{
  log('Game over!');
},5000);
