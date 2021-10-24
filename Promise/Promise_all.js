Promise.all = (promises) => {
  // 判断是否可迭代
  let isIterable = (params) => typeof params[Symbol.iterator] === 'function'
  return new Promise((resolve, reject) => {
    // 如果不可迭代
    if (!isIterable(promises)) {
      reject(new TypeError(`${promises} is not iterable!`))
    } else {
      let result = []
      let count = 0
      if (promises.length === 0) {
        resolve(result)
      } else {
        for (let i = 0; i < promises.length; i++) {
          Promise.resolve(promises[i]).then((value) => {
            count++
            result[i] = value
            if (count === promises.length) resolve(result)
          }, reject)
        }
      }
    }
  })
}