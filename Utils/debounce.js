// 普通防抖
function debounce(fn,time){
  let timer = null
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,args)
    },time)
  }
}

// 特殊防抖（可以用 flag 标志第一次是否马上执行）
function debounce(fn,time,flag = true){
  let timer = null
  return function(...args){
    clearTimeout(timer)
    // 首次执行，timer 肯定是 null
    if(flag && !timer){
      fn.apply(this,args)
    } 
    timer = setTimeout(() => {
      fn.apply(this,args)
    },time)
  }
}

// 测试
const fn = () => console.log(this)
input.addEventlistener('input',debounce(fn,2000))
