Array.prototype.myUnshift = function(...args){
  let arr = this
  if(args.length > 0){
      let len1 = arr.length,len2 = args.length
      // k 代表数组最后一个元素的下标
      let k = len1 + len2 - 1
      for(let i = len1 - 1;i >= 0;i--){
          arr[k--] = arr[i]
      }
      for(let i in args){
          arr[i] = args[i]
      }   
  }    
  return arr.length
}