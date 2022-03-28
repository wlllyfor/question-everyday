class Singleton {
  static instance = null
  static getInstance () {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()

console.log(s1 === s2) // true


// 闭包实现
function Singleton1 () {}

const getSingletonInstance = (function () {
  let instance = null
  return function () {
    if (!instance) {
      instance = new Singleton1()
    }
    return instance
  }
})()

const s1 = getSingletonInstance()
const s2 = getSingletonInstance()

console.log(s1 === s2) // true