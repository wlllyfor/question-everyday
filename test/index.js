Function.prototype.myBind = function (context) {
  const fn = this
  const args = [...arguments].slice(1)
  return function () {
    return fn.call(context, ...args, ...arguments) 
  }
}

Function.prototype.myBind = function (context) {
  const fn = this
  const args = [...arguments].slice(1)
  return function newFn () {
    if (this instanceof newFn) { 
      return new fn(...args, ...arguments) 
    }
    return fn.call(context, ...args, ...arguments)
  }
}

Function.prototype.myBind = function (context) {
  const fn = this
  const args = [...arguments].slice(1)
  const F = function () {}
  F.prototype = this.prototype
  const newFn = function () {
    if (this instanceof newFn) { 
      return new fn(...args, ...arguments) 
    }
    return fn.call(context, ...args, ...arguments)
  }
  newFn.prototype = new F()
  return newFn
}

Function.prototype.myBind = function (context) {
  var target = this;
  if (!isCallable(target)) {
      throw new TypeError('Function.prototype.bind called on incompatible ' + target);
  }
  var args = array_slice.call(arguments, 1);
  var bound;
  var binder = function () {
      if (this instanceof bound) {
          var result = target.apply(
              this,
              array_concat.call(args, array_slice.call(arguments))
          );
          if ($Object(result) === result) {
              return result;
          }
          return this;
      } else {
          return target.apply(
              context,
              array_concat.call(args, array_slice.call(arguments))
          );
      }
  };
  var boundLength = max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
      array_push.call(boundArgs, '$' + i);
  }
  bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
  
  if (target.prototype) {
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
  }
  return bound;
}

// function Person (name) {
//   this.name = name
//   // return {
//   //   name: 'xxx'
//   // }
// }

// const fn = Person.myBind()
// const p = new fn('lin')
// console.log('p :>> ', p)
// console.log('p.name :>> ', p.name)

function fn(x,y,z) {
  return x + y + z
}

console.log(fn.length)

const newFn = fn.myBind(null, 1, 2,3)
newFn()

console.log(newFn.length)