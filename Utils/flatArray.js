// 二维数组：方法一
function flat(arr){
    const res = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for(let j=0;j<arr[i].length;j++){
                res.push(arr[i][j])
            }
        } else {
            res.push(arr[i])
        }
    }
}

// 二维数组：方法二
function flat(arr){
    const res = []
    for(x of arr){
        res.concat(x)
    }
    return res
}

// 二维数组：方法三
arr.reduce((acc,cur) => acc.concat(cur),[])

// 二维数组：方法四
([]).concat(...arr)

// 二维数组：方法五
([]).concat.apply(null,arr)


// 多维数组：方法一
function flat(arr,res = []){
	  arr.forEach(item => {
        Array.isArray(item) ? flat(item,res) : res.push(item)
    })
    return res
}

// 多维数组：方法二
function flat(arr){
    return arr.reduce((acc,cur) => {
        return Array.isArray(cur) ? acc.concat(flat(cur)) : acc.concat(cur)
    },[])
}

// 多维数组：方法三
function flat(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}

// 多维数组：方法四（要求所有元素数据类型相同，以数字型数组为例）
function flat_numberArray(arr){
    return arr.toString().split(',').map(x => Number(x))
}