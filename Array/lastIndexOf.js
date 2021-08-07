Array.prototype.myLastIndexOf = function(target,start){
  let arr = this
  let len = arr.length 
  start = start || arr[arr.length - 1]
  let _start = start < 0 ? len + start : start >= len ? arr.length - 1 : start
  for(;_start > 0;_start--){
      if(arr[_start] === target){
          return _start
      }
  }
  return -1
}