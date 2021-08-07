Array.prototype.mySort = function(...args){
    let arr = this   
    // 判断规则,判断x是否应该放在y的前面
    function shouldBefore(x,y){
        // 如果没传参或者传了 undefined
        if(args.length == 0 || args.length != 0 && typeof args[0] === 'undefined'){
          return String(x) < String(y)    
        } 
        // 如果传函数
        else {
            let fn = args[0]
            return fn(x,y) < 0 ? true : false
        }
    }
    // 如果传参但是没传函数或者 undefined
    if(typeof args[0] != 'function' && typeof args[0] != 'undefined'){
        throw new TypeError("The argument msut be undefined or a function")
    } else {
        for(let i = 0;i < arr.length - 1;i++){
            for(let j = 0;j < arr.length - 1 - i;j++){
                if(shouldBefore(arr[j+1],arr[j])){
                    // 两数交换
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp                  
                }
            }
        }
    }
    return arr
}