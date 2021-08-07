const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise (executor) {
    let self = this
    self.status = PENDING
    self.value = null
    self.reason = null
    self.onFulfilledCallbacks = []
    self.onRejectedCallbacks = []
    function resolve(value){
        if(value instanceof Promise) {
            return value.then(resolve,reject)
        }
        if(self.status === PENDING){
            self.status = FULFILLED
            self.value = value
            self.onFulfilledCallbacks.forEach(fn => fn())
        }
    }
    function reject(reason){
        if(self.status === PENDING){
            self.status = REJECTED
            self.reason = reason
            self.onRejectedCallbacks.forEach(fn => fn())
        }
    }
    try {
        executor(resolve,reject)
    } catch (e) {
        reject(e)
    }
}
Promise.prototype.then = function (onFulfilled,onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e }
    let self = this
    let promise2
    if (self.status === FULFILLED) {
        return promise2 = new Promise((resolve,reject) => {
            queueMicrotask(() => {
                try {
                    let x = onFulfilled(self.value)
                    resolvePromise(promise2,x,resolve,reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    } 
    else if (self.status === REJECTED) {
        return promise2 = new Promise((resolve,reject) => {
            queueMicrotask(() => {
                try {
                    let x = onRejected(self.reason)
                    resolvePromise(promise2,x,resolve,reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    } 
    else if (self.status === PENDING) {
        return promise2 = new Promise((resolve,reject) => {
            self.onFulfilledCallbacks.push(() => {
                queueMicrotask(() => {
                    try {
                        let x = onFulfilled(self.value)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
            self.onRejectedCallbacks.push(() => {
                queueMicrotask(() => {
                    try {
                        let x = onRejected(self.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            })
        })
    }
}
function resolvePromise (promise2,x,resolve,reject) {
    if(promise2 === x){
        return reject(new TypeError('Chaining cycle!'))
    }
    if (x !== null && typeof x === 'object' || typeof x === 'function') {
        let then 
        try {
            then = x.then
        } catch (e) {
            reject(x)
        }
        if (typeof then === 'function') {
            let called = false
            try {
                then.call(x,(y) => {
                    if(called) return
                    called = true
                    resolvePromise(promise2,y,resolve,reject)
                },(r) => {
                    if(called) return
                    called = true
                    reject(r)
                })
            } catch (e) {
                if(called) return
                reject(e)
            }
        } else {
            resolve(x)
        }
    } else {
        resolve(x)
    }
}

// 测试
Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
      dfd.resolve = resolve;
      dfd.reject = reject;
  });
  return dfd;
}

module.exports = Promise;