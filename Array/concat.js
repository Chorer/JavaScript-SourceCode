Array.prototype.myConcat = function(...args){
  let arr = this
  let res = []
  let k = 0
  const isArrayLike = obj => {
      if( typeof o === 'object' &&             
         isFinite(o.length) &&                    
         o.length >= 0 &&                        
         o.length === Math.floor(o.length) &&    
         o.length < 4294967296) 
        return true
      else
        return false
  }
  for(let el of arr){
      res[k++] = el
  }
  for(let el of args){
      // 如果是数组且没有禁止展开
      if(Array.isArray(el) && el[Symbol.isConcatSpreadable] != false){
          for(let _el of el){
              res[k++] = _el
          }
      } else {
          // 如果是类数组且允许展开
          if(isArrayLike(el) && el[Symbol.isConcatSpreadable]){
              for(let key in el){
                  // 把除了 length 之外的键值都放入新数组中
                  if(key !== 'length'){
                      res[k++] = el[key]
                  }
              }
          } else {
              res[k++] = y
          }
      }
  }
  return res
}