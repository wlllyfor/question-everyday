---
show: step
version: 1.0
enable_checker: true
---

# 「真题讲解」- 实现 reactive 和 effect

## 本节介绍

本节是“实现 `reactive` 和 `effect` 这道题”的讲解，在讲解这道题的同时也会介绍 Vue3 响应式相关的知识。

#### 知识点

- 响应式
- Proxy

## 题解

在讲解之前，先给出本题的答案，代码如下：

```js
let fn = null

function reactive(obj) {
  return new Proxy(obj, {
    set(obj, key, val) {
      obj[key] = val
      fn()
    }
  })
}

function effect(callback) {
  fn = callback
  callback()
}
```

## 题解分析

要做出本题，就要先理解 Vue 响应式的原理。

我们先来看一个例子，当有一个变量 `a = 5`，然后还有另外一个变量 `b = a * 10`。

```js
let a = 5
let b = a * 10
```

现在需求是，不管 `a` 如何变化，`b` 永远要是 `a` 的 10 倍，你会如何去实现这个需求？

就用上面的两行代码是无法实现的，当 `a` 改变的时候，`b` 不会更新，因为 `b = a * 10` 只执行了一次。

```js
let a = 5
let b = a * 10
console.log(b) // 50

a = 6
console.log(b) // 50，期望输出 60
```

除非每当 `a` 改变的时候，就执行一次 `b = a * 10`，这样就能把 b 和 a 关联起来，实现我们的需求。

```js
let a = 5
let b = a * 10
console.log(b) // 50

a = 6
b = a * 10
console.log(b) // 60

a = 7
b = a * 10
console.log(b) // 70
```

上面这种代码就叫命令式（过程式）代码，简单明了，但是封装性不高，很有可能写出很多重复性的代码。

遇到大量重复的代码，可以用函数来解决，我们把上面的代码稍微封装一下，如下所示：

```js
let a = 5
let b
function updateB() {
  b = a * 10
  console.log(b)
}
updateB() // 打印 50

let a = 6
updateB() // 打印 60

let a = 7
updateB() // 打印 70
```

这么看上去稍微好了一点，但 `updateB` 这个函数还是手动调用的，还是没有解决问题，还是没能做到当 `a` 变化之后，`b` 自动更新。

我们需要一种机制，当 `a` 被改变的时候，能够自动检测到 `a` 发生了变化，然后去执行 `updateB`。

```js
onAChanged() -> updateB()
```

这时，就可以用到 [Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 或 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)。

### Proxy

`Object.defineProperty()` 是 Vue2 实现响应式的核心 API，但它有很多缺陷（拓展部分介绍），如今 Vue3 已经废弃了 `Object.defineProperty()`，是用的 `Proxy` 来实现的响应式，我们就来一起学习一下 `Proxy` 这个 API。

`Proxy` 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等），语法如下：

```js
const p = new Proxy(target, handler)
```

其中 `target` 代表需要代理的对象，`handler` 也是一个对象，通常以函数作为属性，各属性中的函数分别定义了在执行各种操作时代理 `p` 的行为。

接上文，我们需要检测到 `a` 发生变化，就可以通过 `Proxy` 的 `handler.set` 方法来检测，代码如下：

```js
const p = new Proxy({
  a: 5
}, {
  set(obj, key, val) {
    console.log('当改变代理对象时，触发 set 函数', val)
    return true // set 方法需返回一个布尔值。
  }
})
```

当改变 `p.a` 的时候，就会触发 `set` 函数，我们在 `set` 函数中打印一段话来做测试，如下图所示：

![图片描述](https://doc.shiyanlou.com/courses/9328/2086340/9284c80fc5971a487309fa2ab6fef311-0/wm)

于是我们就监听到了 `a` 的变化，就可以在 `set` 方法里执行 `updateB` 方法，代码如下：

```js
const p = new Proxy({
  a: 5
}, {
  set(obj, key, val) {
    obj[key] = val
    updateB() // 在 set 方法里执行 updateB 方法
    return true
  }
})
let b = p.a * 10

function updateB() {
  b = p.a * 10
  console.log(`b的值为：${b}`)
}
```

这样 `b` 和 `a` 之间就被关联起来了，`b` 永远都是 `a` 的 10 倍，且 `b` 会随着 `a` 的更新而自动更新，如下图所示：

![图片描述](https://doc.shiyanlou.com/courses/9328/2086340/032c90969d014db9b83ebadca12d15fd-0/wm)

### 数据与视图

如果我们讨论的不是变量 `a` 和 `b` 之间的关系，而是数据和视图之间的关系，比如，每次触发 `set` 的时候，去渲染页面，如下代码所示：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
  <script>
    const userInfo = new Proxy({
      name: 'lin',
      age: 18
    }, {
      set(target, key, val) {
        target[key] = val
        render() // 每次触发 set 的时候，执行 render 函数。
        return true
      }
    })
    render()
    function render() {
      let app = document.getElementById('app')
      app.innerHTML = JSON.stringify(userInfo) // 把数据渲染到页面中
    }
  </script>
</body>
</html>
```

那么当我们改变 `userInfo` 这个对象的时候，渲染到页面中的视图也会跟着更新，如下图所示：

![图片描述](https://doc.shiyanlou.com/courses/9328/2086340/01ec972272760f3db35008ce3180154c-0/wm)

这时你会发现，我们在不知不觉中就已经实现了 Vue 响应式的核心功能——数据与视图相互绑定。

### reactive 和 effect

上面的代码完全是硬编码，实际业务场景中，肯定不可能这么写，我们把上面的代码再优化一下，不必每次都定义一个 `proxy`，也不必每次都在 `set` 方法里去执行更新，封装一个 `reactive` 函数来把数据变成响应式，封装一个 `effect` 函数来接收要执行的更新方法，代码如下：

```js
let fn = null

function reactive(obj) {
  return new Proxy(obj, {
    set(obj, key, val) {
      obj[key] = val
      fn()
    }
  })
}

function effect(callback) {
  fn = callback
  callback()
}
```

有了这两个函数之后，就只需要传入少量的代码，具体的 `proxy` 实现就被封装到了 `reactive` 函数内部，而 `effect` 函数的作用就是收集更新时需要调用的函数，再缓存这个函数，等到 `set` 被触发时执行这个函数。

这样，我们就实现了一个最简单的响应式系统，之所以说是最简单，是因为它还不够完善，更完善的版本会在后面章节介绍。

事实上，真实的业务场景中，用户也很少用到 `effect` 这个函数，`effect` 是 `Vue` 源码内部的函数，暴露给用户的只有 `reactive` 这个函数，利用 `reactive` 和模板语法，就能实现数据和视图之间的相互绑定，这些细节我们后面章节再介绍。

## 知识延伸

#### proxy 和 Object.defineProperty 对比

[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 和 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，都能监听对象属性的改变，不过它们有许多不同之处，详见下表：

| API       | proxy | Object.defineProperty     |
| ---------- | -------- | ------------ |
| 监听范围       | 监听整个对象 | 监听对象的属性     |
| 监听多个属性    | 能监听 | 不能监听，需要遍历处理     |
| 对象新增属性 | 能监听   | 不能监听，所以有 Vue.set       |
| 删除对象属性 | 能监听   | 不能监听，所以有 Vue.delete      |
| 数组新增元素  | 能监听      | 不能监听，需要特殊处理 |
| 深度监听（对象嵌套对象，二维数组）     | 不能监听，需要递归处理   | 不能监听，需要递归处理    |
| 兼容性       | 不支持 ie | 支持 ie9 及以上，ie 8 部分支持   |

总的来说，`proxy` 的功能更强大，兼容性虽然不如 `Object.defineProperty`，但如今微软都放弃 ie 了，不兼容 ie 也无所谓，所以 Vue3 用 `proxy` 替代了 `Object.defineProperty`。

## 本节总结

本节我们从 `b = a * 10` 的例子开始讲起，一步一步地介绍了 Vue 响应式的由来和实现，但我们本节只实现了最简单的响应式，在后面的章节，我们会继续深入探究，我们下一节见。
