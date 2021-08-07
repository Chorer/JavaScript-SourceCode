Array.prototype.myFlatMap = function(fn,thisArg = null){
  if(typeof fn != 'function'){
      throw new TypeError(`${fn} is not a function`)
  }
  let arr = this
  let newArr = new Array(arr.length)
  let k = 0
  for(let i = 0;i < arr.length;i++){
      if(i in arr){
          const res = fn.call(thisArg,arr[i],i,arr)
          if(Array.isArray(res)){
              for(let el of res){
                  newArr[k++] = el
              }
          } else {
              newArr[k++] = res
          }
      }
  }   
  return newArr
}