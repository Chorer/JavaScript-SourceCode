Array.prototype.myReduceRight = function(...args){
  let fn = args[0]
  let arr = this
  let len = arr.length
  let index = len - 1,acc
  if(typeof fn != 'function'){
      throw new TypeError(`${fn} is not function`)
  }
  if(args.length >= 2){
      acc = args[1]
  } else {
      while(index > 0 && !(index in arr)){
          index--
      }
      if(index == 0){
          throw new TypeError('Reduce of empty array with no initical value')
      }
      acc = arr[index--]
      for(;index >= 0;index--){
          if(index in arr){
              acc = fn(acc,arr[index],index,arr)
          }
      }
      return acc
  }
}