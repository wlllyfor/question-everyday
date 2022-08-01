// const p = new Promise((reslove, reject) => {

// })

// console.log(p) // Promise {<pending>}


// const p = new Promise((reslove, reject) => {
//   reslove(200)
// })

// console.log(p) // Promise {<fulfilled>: 200}

const p = new Promise((reslove, reject) => {
  reject('error')
})

console.log(p) // Promise {<rejected>: 'error'}