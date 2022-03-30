Function.prototype.myBind = function (context) {
  const fn = this
  const args = [...arguments].slice(1)
  return function () {
    return fn.call(context, ...args, ...arguments)
  }
}

function Person (name) {
  this.name = name
}

const fn = Person.myBind()
const p = new fn('lin')
console.log('p :>> ', p)
console.log('p.name :>> ', p.name)