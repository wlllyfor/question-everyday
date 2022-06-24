// 用一个全局变量 fn 存储需要更新的函数（updateB、render、...）。
let fn = null

function reactive(obj) {
  return new Proxy(obj, {
    set(obj, key, val) {
      obj[key] = val
      fn() // set 被触发时执行这个函数。
      return true
    }
  })
}

// 需要更新的函数以参数的形式传递到 effect 函数内。
function effect(callback) {
  fn = callback // 在 effect 函数内部把需要更新的函数赋给 fn。
  callback() // 初始化时执行一次。
}

const obj = reactive({
  name: 'xxx',
  age: 18
})

effect(() => {
  console.log('effect run')
})