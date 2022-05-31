// function myInstanceof(target, Fn) {
  
//   if(!['object', 'function'].includes(typeof target) || !target) {
//     return false
//   }
//   while(true) {
//     if (!target) {
//       return false
//     } else if (target === Fn.prototype) {
//       return true
//     }
//     target = target.__proto__
//   }
// }

function myInstanceof(target, Fn) {
  if(!['object', 'function'].includes(typeof target) || !target) {
    return false
  }
  if (!target) {
    return false
  } else if (target === Fn.prototype) {
    return true
  }
  return myInstanceof(target.__proto__, Fn)
}

// console.log(myInstanceof(1, Object))
// console.log(myInstanceof(new Number(1), Object))
// console.log(myInstanceof(Number(1), Number))
// console.log(myInstanceof(new Number(1), Number))
// console.log(1 instanceof Object)
// console.log(new Number(1) instanceof Number)
// console.log(new Number(1) instanceof Number)

console.log(myInstanceof(undefined, Object))

console.log(undefined instanceof Object)


// console.log(myInstanceof('qwe', Object))
// console.log(myInstanceof('qwe', String))
// console.log(myInstanceof(new String('qwe'), String))


// console.log(myInstanceof([], Array))
// console.log(myInstanceof([], Object))
// console.log([] instanceof Object)
// console.log(myInstanceof({}, Object))

// console.log(myInstanceof(function fn() {}, Function))
// console.log(myInstanceof(function fn() {}, Object))
// let fn = function () {}
// console.log(fn instanceof Function)
// console.log(fn instanceof Object)

// console.log(myInstanceof(new Date(), Date))
// console.log(myInstanceof(new Date(), Object))
// console.log(myInstanceof(/abc/, RegExp))
// console.log(myInstanceof(/abc/, Object))
