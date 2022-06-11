let activeEffect = null
let fn = null

export function effect(callback) {
  activeEffect = callback
  callback()
}

export function reactive(target) {
  return new Proxy(target, {
    get(target, key) {
      fn = activeEffect
      return target[key]
    },
    set(target, key, val) {
      target[key] = val
      fn()
      return true
    }
  })
}