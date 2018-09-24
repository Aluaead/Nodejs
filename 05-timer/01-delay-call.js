#!/usr/bin/node

function Bomb(){
  this.message = 'Bome';
}

Bomb.prototype.explode = function(){
  console.log(this.message);
};

var bomb = new Bomb();

var timeID = setTimeout(bomb.explode.bind(bomb),2000);

clearTimeout(timeID);
