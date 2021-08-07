function isObject(obj){
  return Object.prototype.toString.call(obj) === '[object Object]'
}
function flatObject(obj,pre = '',res = {}){
  Reflect.ownKeys(obj).forEach(key => {
      let fullKey = pre + key
      if(isObject(obj[key])){
          flatObject(obj[key],fullKey + '.',res)
      } else {
          res[fullKey] = obj[key]
      }
  })
  return res
}

// 测试
let entry = {
  a:1,
  b:2,
  c:{
      d:{
          e:3
      },
      f:{
          g:{
              h:4
          }
      },
      i:5
  }
}
flatObject(entry)