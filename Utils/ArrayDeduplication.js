// 利用 set 去重
function deDuplication(arr){
    return Array.from(new Set(arr))
    // return [...new Set(arr)]
}

// 双重循环 + splice
function deDuplication(arr){
    for(let i = 0;i < arr.length;i++){
        for(let j = i + 1;i < arr.length;j++){
            if(Object.is(arr[i],arr[j])){
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr
}

// 新建数组 + includes
function deDuplication(arr){
    const res = []
    arr.forEach((item,index) => {
        // 也可以 if(res.indexOf(item) == -1)，但是无法正确判断 NaN
        if(!res,includes(item)){
            res.push(item)
        }
    })
}
 
// reduce + includes
function deDuplication(arr){
    return arr.reduce((acc,cur) => {
        // return acc.includes(cur) ? acc : acc.concat(cur)
        return acc.includes(cur) ? acc : [...acc,cur]
    },[])
}

// 新建数组 + sort
function deDuplication(arr){
    arr.sort()
    const res = [arr[0]]
    for(let i = 1;i < arr.length;i++){
        if(!Object.is(arr[i],arr[i-1])){
            res.push(arr[i])
        }
    }
    return res
}

// 新建数组 + 利用对象属性
function deDuplication(arr){
    const res = []
    const obj = {}
    arr.forEach((item,index) => {
        if(!obj[item]){
            res.push(item)
            obj[item] = 1
        } else {
            obj[item]++
        }
    })
    return res
}

// 利用 map
function deDuplication(arr){
    let map = new Map()
    for(item of arr){
        if(!map.has(item)){
            map.set(item,true)
        }
    }
    return [...map.keys()]
}

// filter + indexOf
function deDuplication(arr){
    return arr.filter((item,index) => index === arr.indexOf(item))
}