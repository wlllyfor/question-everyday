import { effect } from './effect.js'
import { reactive } from './reactive.js'

const obj = reactive({
  name: 'xxx',
  age: 18,
  profession: 'student',
  obj: {
    a: 1
  }
})

// effect(function render1() {
//   console.log('执行 render1');
//   effect(function render2() {
//     console.log('执行 render2');
//     let p2 = document.getElementById('p2')
//     p2.innerHTML = obj.age
//   })
//   let p1 = document.getElementById('p1')
//   p1.innerHTML = obj.name
// })

// setTimeout(() => {
//   obj.name = 23
// }, 1000);

effect(render)

function render() {
  let p1 = document.getElementById('p1')
  p1.innerHTML = JSON.stringify(obj)
}

setTimeout(() => {
  obj.obj.a = 10000
}, 1000);
