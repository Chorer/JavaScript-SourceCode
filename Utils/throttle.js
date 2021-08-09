// 基于时间戳实现
function throttle(fn,time){
  let pre = 0
  return function(...args){
    if(Date.now() - pre > time){
      fn.apply(this,args)
    }
  }
}

// 基于定时器实现
function throttle(fn,time){
  let timer = null
  return function(...args){
    if(!timer){
      timer = setTimeout(() => {
        timer = null
        fn.apply(this,args)
      },time)
    }
  }
}