Array.prototype.myIndexOf = function(target,start = 0){
  let arr = this
  let len = arr.length
  let _start = start >= 0 ? start : Math.abs(start)<= len ? len + start : 0
  for(;_start < len;_start++){
      if(arr[_start] === target){
          return _start
      }
  }
  return -1
}