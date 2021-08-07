Promise.prototype.catch = (onRejected) => {
  return this.then(null,onRejected)
}