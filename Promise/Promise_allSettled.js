Promise.allSettled = (promises) => {
  let isIterable = param => typeof param[Symbol.iterator] === 'function'
  return new Promise((resolve,reject) => {
      if (!isIterable(promises)) {
         reject(new TypeError(`${promises} is not iterable!`)) 
      } else {
          let result = []
          let count = 0
          if(promises.length === 0) {
              resolve(result)
          } else {
              for(let i = 0;i < promises.length;i++){
                  Promise.resolve(promises[i]).then(
                    value => {
                          count++
                          result[i] = {
                              status: 'fulfilled',
                              value
                          }
                          if(count === promises.length) resolve(result)
                      },
                      reason => {
                          count++
                          result[i] = {
                              status: 'rejected',
                              reason
                          }
                          if(count === promises.length) resolve(result)
                      }
                  )
              }
          }
      }
  })
}