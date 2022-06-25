import { track, trigger } from './effect.js'

function get (target, key) {
  track(target, 'get', key)
  return target[key]
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