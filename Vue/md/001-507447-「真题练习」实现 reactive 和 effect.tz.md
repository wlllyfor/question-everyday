# 实现类型判断

## 挑战介绍

本节我们来挑战一道大厂面试真题 —— 实现 `reactive` 和 `effect`。

## 挑战准备

新建一个 `reactive.js` 文件，在文件里写入一个名为 `reactive` 的函数和一个名为 `effect.js` 的函数，并导出这两个函数，如下图所示：

![图片描述](https://doc.shiyanlou.com/courses/9328/2086340/f4dbb31864f35330aa927755aeaed1ad-0/wm)

这个文件在环境初始化时会自动生成，如果发现没有自动生成就按照上述图片自己创建文件和函数，函数代码如下：

```js
function reactive(obj) {
  // 补充代码
}

function effect(callback) {
  // 补充代码
}

module.exports = {
  reactive,
  effect
}
```

## 挑战内容

Vue 的响应式 API [reactive](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive) 能让对象变得可响应，具体示例见挑战环境中 test 目录下的 `testReactive.html` 和 `testReactive.js`。

```js
// 定义一个可响应的对象 userInfo
const userInfo = reactive({
  name: 'lin'
})

let name
effect(() => {
  name = userInfo.name // 在 effect 函数中把 name 和 userInfo.name 关联起来。
})
```

启动挑战环境中的 `web server`，在控制台中依次输入下图内容：

![图片描述](https://doc.shiyanlou.com/courses/9328/2086340/259bee03180e3492561fe0ec92a5c548-0/wm)

可以看到，`name` 和 `userInfo.name` 关联起来之后，改变 `userInfo.name`，`name` 也会跟着改变。

请实现 `reactive` 和 `effect` 函数。

不必实现 Vue3 中 `reactive` 和 `effect` 的完整功能，只需通过如下测试用例即可：

```js
describe('测试响应式', () => {
  it('测试用例1', () => {

    // 定义一个可响应的对象 userInfo。
    let userInfo = reactive({
      name: 'lin'
    })
    let name

    // 在 effect 函数中，让 name 变量和 userInfo.name 相关联。
    effect(() => {
      name = userInfo.name
    })
    expect(name).toBe('lin')
    
    // 改变 userInfo.name，name 变量也会跟着改变。
    userInfo.name = 'xxx'
    expect(name).toBe('xxx')
  })

  it('测试用例2', () => {
    let userInfo = reactive({
      name: 'lin'
    })
    let age
    effect(() => {
      age = userInfo.age
    })
    expect(age).toBe(undefined)

    // 新增属性，也能响应。
    userInfo.age = 18
    expect(age).toBe(18)
  })
})
```

## 注意事项

- 文件名、函数名不可随意更改。
- 文件中编写的函数需要导出，否则将无法提交通过。

## 提示

如果对 Vue 的响应式不了解，直接就来做本题可能会很懵，可以先去看一下 [Vue3 文档](https://v3.cn.vuejs.org/api/reactivity-api.html) ，了解了相关的概念之后，再来做本题。
