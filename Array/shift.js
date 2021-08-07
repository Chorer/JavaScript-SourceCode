Array.prototype.myShift = function(){
  let arr = this
  let returnValue = arr[0]
  for(let i = 1;i < arr.length;i++){
      arr[i-1] = arr[i]
  }
  arr.length--
  return returnValue
}