Array.prototype.myMap = function(fn,thisArg = null){
  if(typeof fn != 'function'){
      throw TypeError(`${fn} is not a function`)
  }
  let arr = this
  // 这里不要使用 let newArr = []，否则修改原数组长度时会影响新数组长度
  let newArr = new Array(arr.length)
  for(let i = 0,len = arr.length;i < len;i++){
      if(i in arr){
          const res = fn.call(thisArg,arr[i],i,arr)
          newArr[i] = res
      }
  }
  return newArr
}