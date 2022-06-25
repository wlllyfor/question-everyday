import { effect } from './effect.js'
import { reactive } from './reactive.js'

const obj = reactive({
  name: 'xxx',
  age: 18,
  profession: 'student'
})

effect(render1)
effect(render2)

function render1() {
  console.log('执行 render1');
  let p1 = document.getElementById('p1')
  p1.innerHTML = obj.name
}

function render2() {
  console.log('执行 render2');
  let p2 = document.getElementById('p2')
  p2.innerHTML = obj.age
}

obj.age = 1