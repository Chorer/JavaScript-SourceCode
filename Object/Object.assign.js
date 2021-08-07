Object.assign = function (target,...objs){
  if(target === null || target === undefined){
      throw new TypeError("can not convert null or undefined to object")
  }
  let res = Object(target)
  objs.forEach(obj => {
      'use strict'
      if(obj != null && obj != undefined){
          for(let key in obj){
              if(Object.prototype.hasOwnProperty.call(obj,key)){
                  res[key] = obj[key]
              }
          }
      }
  })
  return res
}
