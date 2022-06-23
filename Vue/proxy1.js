let fn = null

function reactive(target) {

  // 如果是原始类型数据，就直接返回（跳出递归）。
  if (typeof target !== 'object' || target === null) {
    return target
  }
  return new Proxy(target, {
    get(target, key) { // 获取对象属性时，会触发 get 方法
      return reactive(target[key]) // 注意这里，递归调用自身。
    },
    set(target, key, val) {
      target[key] = val
      fn()
      return true
    },
    deleteProperty(target, key) {
      delete target[key]
      fn()
      return true
    }
  })
}

function effect(callback) {
  fn = callback
  callback()
}

let obj = reactive({
  a: {
    b: {
      c: 'xxx'
    }
  },
  arr: [
    [1,2,3]
  ]
})

effect(render)

function render() {
  let app = document.getElementById('app')
  app.innerHTML = JSON.stringify(obj)
}