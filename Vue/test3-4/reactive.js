import { track, trigger } from './effect.js'

const baseHandlers = {
  get (target, key) {
    track(target, 'get', key)
    return target[key]
  },
  set (target, key, val) {
    target[key] = val
    trigger(target, 'set', key, val)
    return true
  }
}

export function reactive(target) {
  return new Proxy(target, baseHandlers)
}
