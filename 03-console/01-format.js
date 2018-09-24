#!/usr/bin/node

const user = {
  name :'liwenxuan',
  age : 21,
  qq : '1076843408'
};

const log = console.log;


//method 1 
log('name:%s',user.name);
log('age:%d',user.age);
log('user:%j',user);
log('qq:%s',user.qq);

//join 拼接

log('qq:' + user.qq);
 
//template  模板 

log(`qq:${user.qq}`);

//输出到标准错误流上
console.error('error message!');
