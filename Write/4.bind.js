Function.prototype.myBind1 = function (context) {
  const fn = this
  const args = [...arguments].slice(1)
  return function newFn () {
    if (this instanceof newFn) { 
      return new fn(...args, ...arguments) 
    }
    return fn.call(context, ...args, ...arguments)
  }
}

Function.prototype.myBind2 = function (context) {
  const fn = this
  const args = [...arguments].slice(1)
  return function newFn () {
    if (this instanceof newFn) { 
      return new fn(...args, ...arguments) 
    }
    return fn.apply(context, [...args, ...arguments])
  }
}