// ES3
Function.prototype.myCall = function(thisArg){
  if(typeof this != 'function'){
      throw new Error('The caller must be a function')
  }
 if(thisArg === undefined || thisArg === null){
      thisArg = globalThis
  } else {
      thisArg = Object(thisArg)
  }   
  const args = []
  for(var i = 1;i < arguments.length;i ++){
      args.push('arguments[' + i + ']')
  }
  thisArg.fn = this
  const res = eval('thisArg.fn(' + args + ')')
  delete thisArg.fn
  return res
}

// ES6
Function.prototype.myCall = function(thisArg,...args){
	if(typeof this != 'function'){
        throw new Error('The caller must be a function')
    }
    if(thisArg === undefined || thisArg === null){
        thisArg = globalThis
    } else {
        thisArg = Object(thisArg)
    }
    thisArg.fn = this
    const res = thisArg.fn(...args)
    delete thisArg.fn
    return res
}