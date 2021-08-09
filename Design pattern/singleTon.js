// Class 实现
class SingleTon {
  constructor(name,age){
    if(!SingleTon.hasInstance){
      this.name = name
      this.age = age
      SingleTon.hasInstance = this
    }
    return SingleTon.hasInstance
  }
}
const obj1 = SingleTon('Jack',12)
const obj2 = SingleTon('Tom',14)
console.log(obj1 === obj2)             // true


// 闭包实现
const SingleTon = (function (){
  function Fn(name,age){
    this.name = name
    this.age = age
  }
  let instance = null
  return function(){
    if(!instance){
      instance = new Fn(...arguments)
    }
    return instance
  }
})()
const obj1 = SingleTon('Jack',12)
const obj2 = SingleTon('Tom',14)
console.log(obj1 === obj2)             // true