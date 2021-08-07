// ES3
Function.prototype.myApply = function(thisArg,args){
  if(typeof this != 'function'){
      throw new Error('the caller must be a function')
  } 
  if(thisArg === null || thisArg === undefined){
      thisArg = globalThis
  } else {
      thisArg = Object(thisArg)
  }
  if(args === null || args === undefined){
      args = []
  } else if(!Array.isArray(args)){
      throw new Error('CreateListFromArrayLike called on non-object')
  }
  const _args = []
  for(var i = 0;i < args.length;i ++){
      _args.push('args[' + i + ']')
  }
  thisArg.fn = this
  const res = _args.length ? eval('thisArg.fn(' + _args + ')'):thisArg.fn()
  delete thisArg.fn
  return res
}

// ES6
Function.prototype.myApply = function(thisArg,args){
  if(typeof thisArg != 'function'){
      throw new Error('the caller must be a function')
  } 
  if(thisArg === null || thisArg === undefined){
      thisArg = globalThis
  } else {
      thisArg = Object(thisArg)
  }
  if(args === null || args === undefined){
      args = []
  } 
  // 如果传入的不是数组，仿照 apply 抛出错误
  else if(!Array.isArray(args)){
      throw new Error('CreateListFromArrayLike called on non-object')
  }
  thisArg.fn = this
  const res = thisArg.fn(...args)
  delete thisArg.fn
  return res
}