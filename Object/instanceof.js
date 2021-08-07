function myInstanceof(instance,constructor){
  if(typeof instance != 'object' && typeof instance != 'function' || instance == null){
      return false
  }
  if(typeof constructor != 'function'){
      throw TypeError('the right-hand-side of instanceof must be a function')
  }
  let proto = constructor.prototype
  let p = instance.__proto__
  while(p != null){
      if(p == proto){
          return true
      }
      p = p.__proto__
  }
}