// ES3
Function.prototype.myBind = function(thisArg){
  if(typeof this != 'function'){
      throw new Error('the caller must be a function')
  }
  const fnToBind = this
  const args1 = Array.prototype.slice.call(arguments,1)
  const fnBound = function(){
      const args2 = Array.prototype.slice.call(arguments)
      // 如果是通过 new 调用
      return fnToBind.apply(
          // 这里使用 fBound 和 Fn 没区别
          this instanceof fnBound ? this : thisArg , args1.concat(args2)
      )       
  }
  // 实例继承
  const Fn = function(){}
  Fn.prototype = this.prototype
  fnBound.prototype = new Fn()
  return fnBound
}

// ES6
Function.prototype.myBind = function(thisArg,...args1){
  if(typeof this != 'function'){
      throw new Error('the caller must be a function')
  }
  const fnToBind = this
  return function fnBound(...args2){
      // 如果是通过 new 调用的
      if(this instanceof fnBound){
          // 这里如果不能使用展开语法，就使用 eval 构造参数列表
          return new fnToBind(...args1,...args2)
      } else {
          return fnToBind.apply(thisArg,[...args1,...args2])
      }
  }
}