function sleep(time){
  return new Promise((resolve,reject) => {
    setTimeout(resolve,time)
  })
}

// 测试
console.log(1)
await sleep(4000)
console.log(2)