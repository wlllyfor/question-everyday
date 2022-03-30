Function.prototype.myApply1 = function (context = window) {
  context.fn = this
  const args = arguments[1] || []
  const res = context.fn(...args)
  delete context.fn
  return res
}

Function.prototype.myApply2 = function (context = window) {
  if (context === undefined || context === null) {
    context = window
  } else {
    context = Object(context)
  }
  const fn = Symbol('fn')
  context[fn] = this
  const args = arguments[1] || []
  const res = context[fn](...args)
  delete context[fn]
  return res
}

Function.prototype.myApply = function (context = window) {
  if (context === undefined || context === null) {
    context = window
  } else {
    context = Object(context)
  }
  const fn = Symbol('fn')
  context[fn] = this
  
  let args = arguments[1]
  if (args) { // 如果有第二个参数，就判断是不是数组或者类数组
    if (!Array.isArray(args) && !isArrayLike(args)) {
      throw new Error('apply函数第二个参数不是数组或类数组')
    }
    args = Array.from(args) // 将类数组转成数组
  } else {
    args = [] // 如果没有第二个参数，就不处理
  }
  
  const res = context[fn](...args)
  
  delete context[fn]
  return res
}

// 判断对象是否是类数组，摘自《JavaScript权威指南》
function isArrayLike(o) {
  if (o &&                                  // o不是null、undefined等
    typeof o === 'object' &&                // o是对象
    isFinite(o.length) &&                   // o.length是有限数值
    o.length >= 0 &&                        // o.length为非负值
    o.length === Math.floor(o.length) &&    // o.length是整数
    o.length < 4294967296)                  // o.length < 2^32
    return true
  else
    return false
}