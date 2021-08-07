Object.defineProperty(Array,"myOf",{
  value: function(){
      let res = []
      for(let i = 0;i < arguments.length;i++){
          res[i] = arguments[i]
      }
      return res
  }
})                                            