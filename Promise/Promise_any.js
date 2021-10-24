Promise.any = (promises) => {
	let isIterable = (params) => typeof params[Symbol.iterator] === 'function'
	return new Promise((resolve,reject) => {
		if(!isIterable(promises)){
			reject(new TypeError(`${promises} is not iterable!`))
		} else {
			if(promises.length == 0){
				reject('AggregateError: All promises were rejected')
			} else {
				let count = 0
				for(let i = 0;i < promises.length;i ++){
					Promise.resolve(promises[i]).then(resolve,e => {
						count++
						if(count === promises.length) reject('AggregateError: All promises were rejected')
					})
				}
			}			
		}
	})
}