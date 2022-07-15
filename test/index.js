function myBind(fn, context) {
  const args = [...arguments].slice(2)

  // 给返回的函数增加一个名称 newFn，方便后面使用
  return function newFn () {

    // 如果
    console.log('this :>> ', this);
    if (this instanceof newFn) { 
      return new fn(...args, ...arguments) 
    }
    return fn.call(context, ...args, ...arguments)
  }
}

function Person (name) {
  this.name = name
}

const tmpFn = myBind(Person)
const p = tmpFn('zhangsan')
console.log(p) // 输出 {}，应该输出实例才对
console.log(p.name) // 输出 undefined，应该输出 zhangsan 才对
