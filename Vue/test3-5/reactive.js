import { mutableHandlers } from './baseHandlers.js'
import { isObject } from './utils.js'

const targetMap = new WeakMap()

// function shallowReactive(target) {

// }

function createReactiveObject(target, targetMap, targetHandlers) {
  if (!isObject(target)) {
    console.warn(`value cannot be made reactive: ${String(target)}`)
    return target
  }

  // 缓存
  const existingProxy = targetMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  const proxy = new Proxy(target, targetHandlers)
  targetMap.set(target, proxy)
  return proxy
}

export function reactive(target) {
  return createReactiveObject(target, targetMap, mutableHandlers)
}
