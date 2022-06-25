// const targetMap = {
//   target1: {
//     key1: [effect1, effect2, effect3],
//     key2: [effect1, effect2]
//   },
//   target2: {
//     key1: [effect1, effect2]
//   }
// }
const targetMap = new WeakMap()
let activeEffect

export function effect(callback) {
  activeEffect = callback
  callback()
}

export function track(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
  }
  if(typeof activeEffect === 'function') {
    deps.add(activeEffect)
    activeEffect = null
  }
  depsMap.set(key, deps)
}

export function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    return
  }
  let deps = depsMap.get(key)
  if (!deps) {
    return
  }
  deps.forEach(effect => effect())
}