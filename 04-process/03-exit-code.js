#!/usr/bin/node

var code = process.argv[2];

if(typeof(code)==='undefined' || isNaN(Number(code))){
  console.error("命令行参数不正确");
  process.exit();
}else{
  console.log('退出码:',code);
  process.exit(code);
}
process.exit(code);




