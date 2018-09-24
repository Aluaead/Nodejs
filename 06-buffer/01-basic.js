#!/usr/bin/node

const log = console.log;

var buf1 = new Buffer(256);
buf1[0] = 23;

log('buf1 length:',buf1.length);
log('\nbuf1:',buf1);

for(var i = 0;i<256;i++){
  buf1[i]=i;
}
log('\nbuf1 content',buf1);

var buf2 = buf1.slice(250,256);
log('\nbuf2 content',buf2);
buf2.fill(0);

log('\nbuffer content:',buf2);

var arr = ['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3 = new Buffer(arr);
log('\nbuffer content:',buf3);

var buf4 = new Buffer('hello world','utf8');
log('\nbuffer content:',buf4);

buf2.copy(buf4,0,0,buf4.length);
log('\nbuf4:',buf4.length,buf4);;

