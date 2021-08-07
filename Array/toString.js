Array.prototype.myToString = function(){
  let arr = this
  let str = ""
  for(x of arr){
      x = typeof(x) === 'undefined' || x === null ? "" : x
      str += `${x.toString()},`
  }
  return str.slice(0,str.length - 1)
}