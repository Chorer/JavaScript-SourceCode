Array.prototype.myReduce = function(...args){
  let fn = args[0]
  let arr = this
  let len = arr.length
  let index = 0,acc
  if(typeof fn != 'function'){
      throw new TypeError(`${fn} is not a function`)
  }
  // 如果传了第二个参数
  if(args.length >= 2){
      acc = args[1]
  } else {
      // 只要当前数组还没找到非 empty 元素，就一直遍历下去
      while(index < len && !(index in arr)){
          index++
      }
      // 如果数组是一个充满 empty 元素的空数组，则抛出错误
      if(index >= len){
          throw new TypeError('Reduce of empty array with no initial value')
      }
      // index 加一，表示第一个非 empty 元素的下一个元素
      acc = arr[index++]
      for(;index < len;index++){
          if(index in arr){
              acc = fn(acc,arr[index],index,arr)
          }
      }
      return acc
  }    
}