// 可以继续遍历的类型
const objectToInit = ['Object','Array','Set','Map','Arguments']

// 判断是否是引用类型
function isObject(o){
  return o !== null && (typeof o === 'object' || typeof o === 'function')
}
// 判断具体的数据类型
function getType(o){
  return Object.prototype.toString.call(o).slice(8,-1)
}
// 初始化函数
function initCloneTarget(target){
  return new target.constructor()
}
// 拷贝 Symbol
function cloneSymbol(target){
	return Object(target.valueOf())    
    // 或者
    return Object(Symbol.prototype.valueOf.call(target))
    // 或者
    return Object(Symbol(target.description))
}
// 拷贝正则对象
function cloneReg(target) {
  const reFlags = /\w*$/;
  const result = new RegExp(target.source, reFlags.exec(target));
  result.lastIndex = target.lastIndex;
  return result;
}
// 拷贝函数
function cloneFunction(target){
  return eval(`(${target})`)
  // 或者
  return new Function(`return (${target})()`)
}

// 处理不能继续遍历的类型
function directCloneTarget(target,type){
  let _constructor = target.constructor
  switch(type){
    case 'String':
    case 'Boolean':
    case 'Number':
    case 'Error':
    case 'Date':
      return new _constructor(target.valueOf())
      // 或者
      return new Object(_constructor.prototype.valueOf.call(target))
    case 'RegExp':
        return cloneReg(target)        
    case 'Symbol':
        return cloneSymbol(target)        
    case 'Function':            
        return cloneFunction(target) 
    default:            
        return null    
  }        
}


// 深拷贝的核心代码
function deepClone(target,map = new WeakMap()){
    if(!isObject(target))    return target    
    // 初始化
    let type = getType(target)
    let cloneTarget
    if(objectToInit.includes(type)){
        cloneTarget = initCloneTarget(target)
    } else {
        return directCloneTarget(target,type)
    }
 	// 解决循环引用   
    if(map.has(target))       return map.get(target)
    map.set(target,cloneTarget)
    // 拷贝 Set
    if(type === 'Set'){
        target.forEach(value => {
            cloneTarget.add(deepClone(value,map))
        })
    }
    // 拷贝 Map
    else if(type === 'Map'){
        target.forEach((value,key) => {
            cloneTarget.set(key,deepClone(value,map))
        })
    }
    // 拷贝对象字面量、数组、类数组对象
    else if(type === 'Object' || type === 'Array' || type === 'Arguments'){
        Reflect.ownKeys(target).forEach(key => {
            cloneTarget[key] = deepClone(target[key],map)
        })
    }
    return cloneTarget
}