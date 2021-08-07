Array.prototype.myAt = function(searchIndex){
  let arr = this
  let len = arr.length
  let searchIndex = searchIndex >= 0 ? 
      searchIndex : Math.abs(searchIndex) < len ? searchIndex + len : Infinity
  return arr[searchIndex]
}