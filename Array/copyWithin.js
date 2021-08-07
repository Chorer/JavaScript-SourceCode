Array.prototype.myCopyWithin = function(target = 0,begin = 0,end = this.length){
  let arr = this
  let len = arr.length
  let copyArr = []
  let m = 0,n = 0
  target = target >= 0 ? target : Math.abs(target) < len ? target + len : 0
  begin = begin >= 0 ? begin : Math.abs(begin) < len ? begin + len : 0
  end = end >= 0 ? Math.min(end,len) : Math.abs(end) < len ? end + len : end
  // 把需要复制的元素放到 copyArr 数组中
  for(;begin < end;begin++){
      copyArr[m++] = arr[begin]
  }
  let _len = copyArr.length < len - target ? target + copyArr.length : len
  // 用 copyArr 数组从 target 开始覆盖原数组
  for(;target < _len;target++){
      arr[target] = copyArr[n++]
  }
  return arr
}