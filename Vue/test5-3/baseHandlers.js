import { track, trigger } from './effect.js'
import { reactive } from './reactive.js'
import { isObject } from './utils.js'

function get (target, key) {
  track(target, 'get', key)
  if (!isObject(target)) {
    return target[key]
  }
  return reactive(target[key])
}

function set (target, key, val) {
  target[key] = val
  trigger(target, 'set', key, val)
  return true
}

export const mutableHandlers = {
  get,
  set
}