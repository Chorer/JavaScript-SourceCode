Object.create = function(proto,propertiesObject){
  // 参数检测
  if(typeof proto != 'object' && proto !== null){
      throw new Error('the first param must be an object or null')
  }
  // 参数检测
  if(propertiesObject === null){
      throw 'TypeError'
  }
  // 指定原型
  function F(){}
  F.prototype = proto
  const obj = new F()
  // 处理传参 null 的情况
  if(proto === null){
      obj.__proto__ = proto
  }
  // 如果有第二个参数，就为返回对象指定属性
  if(propertiesObject){
      Object.defineProperties(obj,propertiesObject)
  }
  return obj
}

// 简易版
Object.create = function(proto,propertiesObject){
  if(typeof proto != 'object' && proto !== null){
      throw new Error('the first param must be an object or null')
  }
  if(typeof propertiesObject === null){
      throw 'TypeError'
  }
  let obj = {}
  obj.__proto__ = proto
  if(propertiesObject){
      Object.defineProperties(obj,propertiesObject)
  }
  return obj
}