function getType(obj){
    return Object.prototype.toSrting.call(obj).slice(8,-1)
}
// 可以遍历的数据类型
let iterableList = ['Object','Array','Arguments','Set','Map']


// 浅拷贝的核心代码
function shallowClone(obj){
    let type = getType(obj)
    if(!iterableList.includes(type)) return obj
    let res = new obj.constructor()
    // 如果是 Set 或者 Map
    obj.forEach((value,key) => {
        type === 'Set' ? res.add(value) : res.set(key,value)
    })        
    // 如果是对象字面量、类数组对象或者数组
    Reflect.ownKeys(obj).forEach(key => {
        res[key] = obj[key]
    })        
    return res
}