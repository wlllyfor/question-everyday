// function fn() {
//   return myAsync(function* () {
//     return 1
//   });
// }

// function myAsync(genFn) {
//   return new Promise(function(resolve, reject) {
//     const gen = genFn();
//     function step(nextFn) {
//       let next;
//       try {
//         next = nextFn();
//       } catch(e) {
//         return reject(e);
//       }
//       if(next.done) {
//         return resolve(next.value);
//       }
//       Promise.resolve(next.value).then(function(v) {
//         step(function() { return gen.next(v); });
//       }, function(e) {
//         step(function() { return gen.throw(e); });
//       });
//     }
//     step(function() { return gen.next(); });
//   });
// }

// const p = fn()
// p.then((val) => {
//   console.log(val)
// })

// const fs = require('fs');

// const readFile = function (fileName) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(fileName, function(error, data) {
//       if (error) return reject(error);
//       resolve(data);
//     });
//   });
// };

// const gen = function* () {
//   const f1 = yield readFile('/xxx/a');
//   const f2 = yield readFile('/xxx/b');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };

function * printNum() {
  yield 1
  yield 2
  return 3
}

fn = printNum()
console.log(fn.next()) // {value: 1, done: false}
console.log(fn.next()) // {value: 2, done: false}
console.log(fn.next()) // {value: 3, done: true}