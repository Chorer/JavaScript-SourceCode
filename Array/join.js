Array.prototype.myJoin = function(connector = ','){
  let arr = this
  let str = ''
  for(x of arr){
      x = typeof(x) === 'undefined' || x === null ? "" : x
      str += x.toString() + connector
  }
  return str.slice(0,str.length - connector.length)
}
// 或者
Array.prototype.myJoin = function(connector = ','){
  let arr = this
  let len = arr.length
  let str = ''
  for(let i = 0;i < len;i++){
      arr[i] = typeof(arr[i]) === 'undefined' || arr[i] === null ? "" : arr[i]
      // 如果是最后一个元素，则不加连接符（后缀符）
      str += arr[i].toString + (i === len - 1 ? '' : connector)
  }
  return str
}