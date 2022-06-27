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
let effectStack = []
export function effect(fn) {
  const effectFn = () => {
    cleanup(effectFn)
    activeEffect = effectFn
    effectStack.push(effectFn)
    fn()
    effectStack.pop()
    activeEffect = effectStack[effectStack.length - 1]
  }
  effectFn.deps = []
  effectFn()
}

export function track(target, type, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
  }
  deps.add(activeEffect)
  activeEffect.deps.push(deps)
  depsMap.set(key, deps)
}

export function trigger(target, type, key, val) {
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    return
  }
  let deps = depsMap.get(key)
  if (!deps) {
    return
  }
  const depsToRun = new Set(deps)
  depsToRun.forEach(effectFn => {
    effectFn()
  })
}

function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    effectFn.deps[i].delete(effectFn)
  }
  effectFn.deps.length = 0
}