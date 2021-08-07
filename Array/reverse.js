Array.prototype.myReverse = function(){
  let arr = this
  let k = arr.length - 1
  for(let i = 0;i < Math.floor(arr.length/2);i++){
      let temp = arr[i]
      arr[i] = arr[k]
      arr[k--] = temp
  }
  return arr
}