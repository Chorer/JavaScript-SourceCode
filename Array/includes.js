Array.prototype.myIncludes = function(target,start = 0){
  let arr = this
  let len = arr.length
  let _start = start >=0 ? start : Math.abs(start) <= len ? start + len : 0
  function isSame(x,y){
      return x === y || typeof(x)=='number'&&typeof(y)=='number'&&isNaN(x)&&isNaN(y) 
      // return x === y || x!=x && y!= y
      // return x === y || Number.isNaN(x) && Number.isNaN(y)
  }
  for(;_start < len;_start++){
      if(isSame(arr[_start],target)){
          return true
      }
  }
  return false
}