const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(fn) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.resolveCallbacks = []
    this.rejectCallbacks = []

    const resolveHandler = (value) => {
      this.status = FULFILLED
      this.value = value
      this.resolveCallbacks.forEach(fn => fn(this.value))
    }

    const rejectHandler = (reason) => {
      this.status = REJECTED
      this.reason = reason
      this.rejectCallbacks.forEach(fn => fn(this.reason))
    }
    try {
      fn(resolveHandler, rejectHandler)
    } catch(err) {
      rejectHandler(err)
    }
  }

  then(onResolve, onReject) {
    onResolve = typeof onResolve === 'function' ? onResolve : value => value
    onReject = typeof onReject === 'function' ? onReject : error => error

    if (this.status === PENDING) {
      return new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = onResolve(this.value)
            resolve(newValue)
          } catch(err) {
            reject(err)
          }
        })

        this.rejectCallbacks.push(() => {
          try {
            const newReason = onReject(this.reason)
            reject(newReason)
          } catch(err) {
            reject(err)
          }
        })
      })
    }

    if (this.status === FULFILLED) {
      return new MyPromise((resolve, reject) => {
        try {
          const newValue = onResolve(this.value)
          resolve(newValue)
        } catch(err) {
          reject(err)
        }
      })
    }

    if (this.status === REJECTED) {
      return new MyPromise((resolve, reject) => {
        try {
          const newReason = onReject(this.reason)
          reject(newReason)
        } catch(err) {
          reject(err)
        }
      })
    }
  }

  catch(onReject) {
    this.then(null, onReject)
  }
}

const p = new MyPromise((resolve, reject) => {
  reject('error')
})

console.log(p)

p.then((data) => {
  console.log(data)
}).catch(err => {
  console.log(err)
})


// const p = new Promise((resolve, reject) => {
//   reject('error msg')
// })

// console.log(p)
