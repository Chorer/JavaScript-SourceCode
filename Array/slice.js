// 通过默认参数值，为 begin 和 end 设置缺省值
Array.prototype.mySlice = function(begin = 0,end = this.length){
  let arr = this
  let len = arr.length
  let res = []
  let k = 0
  begin = begin >= 0 ? begin : Math.abs(begin) <= len ? begin + len : 0
  end = end < 0 ? end + len : Math.min(end,len)
  for(;begin < end;begin++){
       res[k++] = arr[begin]
  }
  return res
}