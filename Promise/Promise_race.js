Promise.race = (promises) => {
  let isIterable = (param) => typeof param[Symbol.iterator] === 'function'
  return new Promise((resolve,reject) => {
      if (!isIterable(promises)) {
        reject(new TypeError(`${promises} is not iterable!`))
    } else {
          for(let i = 0;i < promises.length;i++){
              Promise.resolve(promises[i]).then(resolve,reject)    
          }
      }        
  })
}