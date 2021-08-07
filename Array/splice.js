Array.prototype.mySplice = function(...args){
  let arr = this
  let len = arr.length
  let res = []
  function computeStart(start){
      return start >= 0 ? start : Math.abs(start) < len ? start + len : 0    
  }
  function computeDeleteNum(args,start){
      return args.length < 2 ? 
          len - start : args[1] > 0 ? Math.min(args[1],len - start) : 0   
  }
  function sliceArray(arr,separator){
      let arr1 = [],arr2 = []
      for(let i = 0;i < arr.length;i++){
          i < separator ? arr1.push(arr[i]) : arr2.push(arr[i])
      }
      // 清空原数组
      arr.length = 0
      return [arr1,arr2]
  }
  // 如果有传参数
  if(args.length > 0){
      // 确定 start 和 deleteNum 的取值
      let start = computeStart(args[0])
      let deleteNum = computeDeleteNum(args,start)		
      // 如果 start 已经大于等于数组长度，则只需关注是否有添加元素，无需进行后续操作		
      if(start >= len){
          if(args.length > 2){
              for(let i = 2;i < args.length;i++){
                  arr.push(args[i])
              }   
          }
      } else {
          // 以 start 为界分割原数组
          let [arr1,arr2] = sliceArray(arr,start)
          // 如果有需要，就删除元素
          if(deleteNum != 0){
              for(let i = 0;i < deleteNum;i++){
                  // 把删除的元素放进返回的 res 数组中
                  res.push(arr2.shift())                
              }
          }
          // 如果有需要，就添加元素
          if(args.length > 2){
              for(let i = 2;i < args.length;i++){
                  arr1.push(args[i])
              }
          }	
          const tempArr = [...arr1,...arr2]
          for(let el of tempArr){
              arr.push(el)
          }
      }
  }
  return res
}