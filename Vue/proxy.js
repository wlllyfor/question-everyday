let fn = null

function reactive(obj) {
  return new Proxy(obj, {
    set(obj, key, val) {
      obj[key] = val
      fn()
    }
  })
}

function effect(callback) {
  fn = callback
  callback()
}

const p = reactive({
  a: 5
})

effect(updateB)

function updateB() {
  b = p.a * 10
  console.log(`b的值为：${b}`)
}
