// 用立即执行函数
const fn = (function () { // 直接写匿名函数，不用起函数名
  const name = 'zhangsan'
  return function () {
    console.log(name)
  }
})()

fn() // 输出 'zhangsan'