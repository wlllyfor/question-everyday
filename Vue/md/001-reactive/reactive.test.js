const { effect, reactive } = require("/home/project/reactive.js");

let userInfo = reactive({
  name: 'lin'
}) || {}
let name
effect(() => {
  name = userInfo.name
})

userInfo.name = 'xxx'
if (name !== 'xxx') {
  printWrong(name)
}

function printWrong(name) {
  console.log("");
  console.log("");
  console.log("");
  console.log("响应式对象 userInfo = { name: 'lin' }");
  console.log("name = userInfo.name");
  console.log("");
  console.log("操作：改变 userInfo.name 为 'xxx'");
  console.log("");
  console.log(`执行结果：name 变为 ${name}`);
  console.log("");
  let userInfo = reactiveAnswer({
    name: 'lin'
  })
  let expected
  effectAnswer(() => {
    expected = userInfo.name
  })
  userInfo.name = 'xxx'
  console.log(`预期结果：name 变为 ${expected}`);
  console.log("");
  console.log(`测试用例未通过`);
  console.log("");
  console.log("");
  console.log("");
  throw Error("error");
}

let userInfo1 = reactive({
  name: 'lin'
}) || {}
let age
effect(() => {
  age = userInfo1.age
})

userInfo1.age = 18
if (age !== 18) {
  printWrong()
}

function printWrong(name) {
  console.log("");
  console.log("");
  console.log("");
  console.log("响应式对象 userInfo = { name: 'lin' }");
  console.log("age = userInfo.age");
  console.log("");
  console.log("操作：改变 userInfo.age 为 18");
  console.log("");
  console.log(`执行结果：age 变为 ${name}`);
  console.log("");
  let userInfo = reactiveAnswer({
    name: 'lin'
  })
  let expected
  effectAnswer(() => {
    expected = userInfo.age
  })
  userInfo.age = 18
  console.log(`预期结果：age 变为 ${expected}`);
  console.log("");
  console.log(`测试用例未通过`);
  console.log("");
  console.log("");
  console.log("");
  throw Error("error");
}

function effectAnswer(callback) {
  activeEffect = callback
  callback()
}

function reactiveAnswer(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      fn = activeEffect
      return obj[key]
    },
    set(obj, key, val) {
      obj[key] = val
      fn()
    }
  })
}
