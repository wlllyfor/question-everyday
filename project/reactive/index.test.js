import { reactive, effect } from "./index"
import { describe, it, expect } from "vitest"

describe('测试响应式', () => {
  it('测试用例1', () => {
    let userInfo = reactive({
      name: 'lin'
    })
    let name
    effect(() => {
      name = userInfo.name
    })
    expect(name).toBe('lin')

    userInfo.name = 'xxx'
    expect(name).toBe('xxx')

    userInfo.name = 'hello'
    expect(name).toBe('hello')
  })

  it('测试用例2', () => {
    let userInfo = reactive({})
    let age
    effect(() => {
      age = userInfo.age
    })
    expect(age).toBe(undefined)

    userInfo.age = 18
    expect(age).toBe(18)

    userInfo.age = 19
    expect(age).toBe(19)
  })
})