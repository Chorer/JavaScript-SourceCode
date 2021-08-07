Object.defineProperty(Array,"myIsArray",{
  value: function(arr){
      // 借用 Object.prototype.toString 判断数据类型
    return Object.prototype.toString.call(arr) === '[object Array]'
}
})