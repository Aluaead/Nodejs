#!/usr/bin/node

const msg = ['name','email','qq','mobile'];

var me={},
    i=0;

console.log(msg[i++]+':');


process.stdin.on('data',(data)=>{

  var cmd = "me."+msg[i-1] + '="'+data.slice(0,data.length-1).toString('utf8')+'"';
  eval(cmd);
  if(i === msg.length){
    console.log(me);
    process.exit();
  }else{
  console.log(msg[i++] + ':');
  }
//console.log(data.slice(0,data.length-1).toString('utf8');
});

  process.stdin.on('end',()=>{
    console.log(me);
  });
