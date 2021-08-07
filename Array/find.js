Array.prototype.myFind = function(fn,thisArg = null){
  if(typeof fn != 'function'){
      throw new TypeError(`${fn} is not a function`)
  }
  let arr = this
  for(let i = 0;i < arr.length;i++){
      const result = fn.call(thisArg,arr[i],i,arr)
      if(result){
          return arr[i]
      }
  }
  return undefined
}
