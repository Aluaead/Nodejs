#!/usr/bin/node

var klass=require('./class.js')

exports.add=function(klasses){
  klasses.forEach(function(item,index){
    var _klass=item
    var teacherName=item.teacherName
    var students=item.students

    klass.add('lvxiaofeng',['liwenxuan','fengshiqi'])
  })
}
