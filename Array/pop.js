Array.prototype.myPop = function(){
  let arr = this
  let returnValue = arr[arr.length - 1]
  arr.length--
  return returnValue
}