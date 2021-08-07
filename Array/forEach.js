Array.prototype.myforEach = function (fn,thisArg = null){
  if(typeof fn != 'function'){
      throw new TypeError(`${fn} is not a function`)
  }
  let arr = this    
  for(let i = 0,len = arr.length;i < len;i++){
      // 如果不是 empty 元素
      if(i in arr){
          fn.call(thisArg,arr[i],i,arr)
      }
  }
}