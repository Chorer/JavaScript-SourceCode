// 原型链继承
function SuperType(){
  this.names = []
}
SuperType.prototype.getNames = function(){}
function SubType(){
  this.ages = []
}
SubType.prototype = new SuperTye()
const obj = new SubType()

// 借用构造函数继承
function SupterTye(names){
  this.names = names
  this.getNames = function(){}
}
function SubType(){
  SuperType.call(this,[])
  this.ages = []
}
const obj = new SubType()

// 组合继承
function SuperType(names){
  this.names = names
}
SuperType.prototype.getNames = function(){}
function SubType(){
  SuperType.call(this,[])
  this.ages = []
}
SubType.prototype = new SuperType()
const obj = new SubType()

// 原型式继承
const obj = {
  name: 'jack',
  friends: [1,2]
}
function createObject(o){
  function F(){}
  F.prototype = o
  return new F()
}
const anotherObj = createObject(obj)
anotherObj.name = 'Tom'
anotherObj.friends = [3,4]

// 寄生式继承
const obj = {
  name: 'jack',
  friends: []
}
function createObject(o){
  // 对象浅拷贝
  let anotherObj = Object.create(o)
  // 对象增强
  anotherObj.getFriends = function(){}
  return anotherObj
}
const anotherObj = createObject(obj)

// 寄生组合式继承
function SuperType(){
  this.name = 'jack'
  this.friends = []
}
SuperType.prototype.getFriends = function(){}

function SubType(){
  // 属性继承
  SuperType.call(this)
}
  // 方法继承
function inherit(sup,sub){
  sub.prototype = Object.create(sup.prototype)
  sub.prototype.constructor = sub
  // 或者直接
  sub.prototype = Object.create(sup.prototype,{
      constructor: {
          value: sub
          // enumerable 默认为 false
      }
  })
}
inherit(SuperType,SubType)
