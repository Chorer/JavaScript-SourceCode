Promise.prototype.finally = (fn) => {
  let P = this.constructor
  return this.then(
    value  => P.resolve(fn()).then(() => value),
      reason => P.resolve(fn()).then(() => { throw reason })
  )
}