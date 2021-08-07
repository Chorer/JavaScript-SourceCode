Object.defineProperty(Array,"myFrom",{
  value:function(toChange,fn,thisArg = null){
      let res = [...toChange]
      if(typeof fn === 'function'){
          for(let i = 0;i < res.length;i++){
              res[i] = fn.call(thisArg,res[i],i,res)
          }
      }
      return res
  }
})