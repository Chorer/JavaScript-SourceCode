function currying(fn, ...args) {
  if(args.length >= fn.length){
    return fn(...args)
  }  else {
    return (...args2) => curry(fn,...args,...args2)
  }
}