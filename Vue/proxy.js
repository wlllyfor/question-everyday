function reactive(target) {
  return new Proxy(target, {
    get(target, key) {
      return target[key]
    },
    set(target, key, val) {
      target[key] = val
      render()
    }
  })
}
let data = {
  name: 'lin',
  age: 18,
  sex: 'male'
}

let obj = reactive(data)

obj.name = 'xxx'

function render() {
  let app = document.getElementById('app')
  app.innerHTML = JSON.stringify(data)
}
 