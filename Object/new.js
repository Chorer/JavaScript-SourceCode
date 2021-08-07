// ES3
function myNew(Fn){
    if(typeof Fn != 'function'){
        throw new TypeError(Fn + 'is not a constructor')
    }
    myNew.target = Fn
    var instance = {}
    // 检测构造函数原型是不是对象
    instance.__proto__ = Fn.prototype instanceof Object ? Fn.prototype : Object.prototype 
    const returnValue = Fn.apply(instance,Array.prototype.slice.call(arguments,1))
    if(typeof returnValue === 'object' && returnValue !== null || typeof returnValue === 'function'){
        return returnValue
    } else {
        return instance
    }
}

// ES6
function myNew(Fn,...args){
    if(typeof Fn != 'function'){
        throw new TypeError(Fn + 'is not a constructor')
    }
    myNew.target = Fn
    const instance = {}
    // 检测构造函数原型是不是对象
    instance.__proto__ = Fn.prototype instanceof Object ? Fn.prototype : Object.prototype 
    const returnValue = Fn.call(instance,...args)
    return returnValue instanceof Object ? returnValue : instance
}