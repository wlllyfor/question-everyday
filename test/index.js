Function.prototype.myCall = function (context = window) {
  if (context === null || context === undefined) {
    context = window
  } else {
    context = Object(context)
  }
  const fn = Symbol('fn')
  context[fn] = this 
  console.log('context :>> ', context);
  const args = [...arguments].slice(1) 
  const res = context[fn](...args) 
  delete context[fn] 
  return res 
}

var lastName = 'xxx'
const person = {
  lastName: 'lin',
  fn: 123
}

function fn () {
  console.log(this.lastName)
}

fn.myCall(person)

console.log('person :>> ', person);
