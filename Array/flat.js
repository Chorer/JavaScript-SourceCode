// reduce + 递归
Array.prototype.myFlat = function(times = 1){
    let arr = this
    // 如果参数无法转化为数字，或小于等于0，则直接将原数组返回
    if(!Number(times) || Number(times) <= 0){
        return arr
    }
    return arr.reduce((acc,cur) => {
        return acc.concat(Array.isArray(cur) ? cur.myFlat(times - 1) : cur)
    },[])
}

// forEach + 递归
 Array.prototype.myFlat = function(times = 1){
    let arr = this
    let res = []
    if(!Number(times) || Number(times) <= 0){
        return arr
    }
    arr.forEach(el => {
        res.concat(Array.isArray(el) ? el.myFlat(times - 1) : el)
    })
    return res
}

// for 循环 + in 检查 + 递归
Array.prototype.myFlat = function(times = 1){
    let arr = this
    let res = []
    if(!Number(times) || Number(times) <= 0){
        return arr
    }
    for(let i = 0;i < arr.length;i++){
        if(i in arr){
            if(Array.isArray(arr[i])){
               	res = [...res,...arr[i].myFlat(times - 1)]
            } else {
                res = [...res,arr[i]]
            }
        }
    }
    return res
}
 