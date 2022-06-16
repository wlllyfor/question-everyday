let fn = null

function reactive(obj) {
  return new Proxy(obj, {
    set(obj, key, val) {
      obj[key] = val
      fn()
      return true
    },
    deleteProperty(obj, key) {
      delete obj[key]
      fn()
      return true
    }
  })
}

function effect(callback) {
  fn = callback
  callback()
}

let userInfo = reactive({
  name: 'lin',
  age: 18
})

effect(render)

function render() {
  let app = document.getElementById('app')
  app.innerHTML = JSON.stringify(userInfo) // 把数据渲染到页面中
}