Array.prototype.myFilter = function(fn,thisArg = null){
	if(typeof fn != 'function'){
        throw new TypeError(`${fn} is not a function`)
    }
    let arr = this
    let res = []
    let k = 0
    for(let i = 0;i < arr.length;i++){
        if(i in arr){
            const result = fn.call(thisArg,arr[i],i,arr)
            // 如果元素符合条件，则放入新数组中
            if(result){
                res[k++] = arr[i]
            }
        }
    }
}