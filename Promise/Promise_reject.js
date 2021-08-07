Promise.reject = (param) => {
  return new Promise((resolve,reject) => {
      reject(param)
  })
}