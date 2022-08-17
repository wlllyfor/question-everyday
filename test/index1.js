const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(fn) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    const resloveHandler = (value) => {
      this.status = FULFILLED
      this.value = value
    }

    const rejectHandler = (reason) => {
      this.status = REJECTED
      this.reason = reason
    }
    try {
      fn(resloveHandler, rejectHandler)
    } catch(err) {
      rejectHandler(err)
    }
  }
}


const p = new MyPromise((resolve, reject) => {
  resolve(200)
  // setTimeout(() => {
  //   resolve(200)
  // }, 1000)
})

console.log('p :>> ', p);




// ---------------------------//


const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(fn) {
    this.state = PENDING
    this.value = undefined
    this.reason = undefined
    this.resloveCallbacks = []
    this.rejectCallbacks = []

    const resloveHandler = (value) => {
      this.state = FULFILLED
      this.value = value
      this.resloveCallbacks.forEach(fn => fn(this.value))
    }

    const rejectHandler = (reason) => {
      this.state = REJECTED
      this.reason = reason
      this.rejectCallbacks.forEach(fn => fn(this.reason))
    }
    try {
      fn(resloveHandler, rejectHandler)
    } catch(err) {
      rejectHandler(err)
    }
  }

  then(onReslove, onReject) {
    onReslove = typeof onReslove === 'function' ? onReslove : value => value
    onReject = typeof onReject === 'function' ? onReject : error => error

    if (this.state = PENDING) {
      return new MyPromise((resolve, reject) => {
        this.resloveCallbacks.push(() => {
          try {
            const newValue = onReslove(this.value)
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

    if (this.state = FULFILLED) {
      return new MyPromise((resolve, reject) => {
        try {
          const newValue = onReslove(this.value)
          resolve(newValue)
        } catch(err) {
          reject(err)
        }
      })
    }

    if (this.state = REJECTED) {
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


const p = new MyPromise(resolve => {
  resolve(200)
  // setTimeout(() => {
  //   resolve(200)
  // }, 1000)
})


console.log(p)

p.then(data => {
  console.log('data :>> ', data);
  return data + 100
}).then(data => {
  console.log('data :>> ', data);
  return data + 200
}).catch(err => {
  console.error(err)
})




// // ------------------------------ //
 



// const PENDING = 'pending'
// const FULFILLED = 'fulfilled'
// const REJECTED = 'rejected'

// class MyPromise {
//   constructor(fn) {
//     this.state = PENDING
//     this.value = undefined
//     this.reason = undefined
//     this.resolveCallbacks = []
//     this.rejectCallbacks = []

//     const resolveHandler = (value) => {
//       this.state = FULFILLED
//       this.value = value
//       this.resolveCallbacks.forEach(fn => fn(this.value))
//     }

//     const rejectHandler = (reason) => {
//       this.state = REJECTED
//       this.reason = reason
//       this.rejectCallbacks.forEach(fn => fn(this.reason))
//     }
//     try {
//       fn(resolveHandler, rejectHandler)
//     } catch(err) {
//       rejectHandler(err)
//     }
//   }

//   then(onResolve, onReject) {
//     onResolve = typeof onResolve === 'function' ? onResolve : value => value
//     onReject = typeof onReject === 'function' ? onReject : error => error

//     if (this.state = PENDING) {
//       return new MyPromise((resolve, reject) => {
//         this.resolveCallbacks.push(() => {
//           try {
//             const newValue = onResolve(this.value)
//             resolve(newValue)
//           } catch(err) {
//             reject(err)
//           }
//         })

//         this.rejectCallbacks.push(() => {
//           try {
//             const newReason = onReject(this.reason)
//             reject(newReason)
//           } catch(err) {
//             reject(err)
//           }
//         })
//       })
//     }

//     if (this.state = FULFILLED) {
//       return new MyPromise((resolve, reject) => {
//         try {
//           const newValue = onResolve(this.value)
//           resolve(newValue)
//         } catch(err) {
//           reject(err)
//         }
//       })
//     }

//     if (this.state = REJECTED) {
//       return new MyPromise((resolve, reject) => {
//         try {
//           const newReason = onReject(this.reason)
//           reject(newReason)
//         } catch(err) {
//           reject(err)
//         }
//       })
//     }
//   }

//   catch(onReject) {
//     this.then(null, onReject)
//   }

//   static resolve(value) {
//     return new MyPromise((resolve, reject) => resolve(value))
//   }

//   static reject(reason) {
//     return new MyPromise((resolve, reject) => reject(reason))
//   }

//   static all(list = []) {
//     return new MyPromise((resolve, reject) => {
//       const count = 0
//       const res = []
//       const length = list.length
//       list.forEach(p => {
//         p.then(data => {
//           res.push(data)
//           count++
//           if (count === length) {
//             resolve(res)
//           }
//         }).catch(err => reject(err))
//       })
//     })
//   }

//   static race(list = []) {
//     let resolved = false
//     return new MyPromise((resolve, reject) => {
//       list.forEach(p => {
//         p.then(data => {
//           if (!resolved) {
//             resolve(data)
//             resolved = true
//           }
//         }).catch(err => reject(err))
//       })
//     })
//   }
// }


// const p = new MyPromise((resolve, reject) => {
//   resolve(200)
//   // setTimeout(() => {
//   //   resolve(200)
//   // }, 1000)
// })

// p.then(data => {
//   console.log('data :>> ', data);
//   return data + 100
// }).then(data => {
//   console.log('data :>> ', data);
//   return data + 200
// }).catch(err => {
//   console.error(err)
// })

// const p2 = MyPromise.resolve(200)
// const p3 = MyPromise.resolve(300)
// const p4 = MyPromise.resolve(400)
// const p5 = MyPromise.reject('wrong')

// const p6 = MyPromise.all([p2, p3, p5])
