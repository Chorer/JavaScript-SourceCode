Array.prototype.myPush = function(...args){
  let arr = this
  for(let el of args){
     arr[arr.length] = el
  }
  return arr.length
}