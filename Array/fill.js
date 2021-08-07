Array.prototype.myFill = function(toFill,begin = 0,end = this.length){
  let arr = this
  let len = arr.length
  begin = begin >= 0 ? begin : Math.abs(begin) < len ? begin + len : 0
  end = end >= 0 ? Math.min(end,len) : Math.abs(end) < len ? end + len : end
  for(;begin < end;begin++){
      arr[begin] = toFill
  }
  return arr
}