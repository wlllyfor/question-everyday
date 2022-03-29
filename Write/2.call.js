Function.prototype.myCall1 = function (context = window) {
  context.fn = this 
  const args = [...arguments].slice(1) 
  const res = context.fn(...args) 
  delete context.fn 
  return res 
}


Function.prototype.myCall2 = function (context) {
  if (context === null || context === undefined) {
      context = window 
  } else {
      context = Object(context) 
  }
  const fn = Symbol('fn') 
  context[fn] = this 
  const args = [...arguments].slice(1) 
  let result = context[fn](...args) 
  delete context[fn]
  return result
}

var lastName = 'xxx'
const person = {
  lastName: 'lin'
}

function fn () {
  console.log(this.lastName)
}

fn.call(person) // 输出 'lin'，而不是 'xxx'
fn.call() // 直接调用，啥也不指向，输出 'xxx'