const userInfo = new Proxy({
  name: 'lin',
  age: 18
}, {
  set(target, key, val) {
    target[key] = val
    fn1()
    fn2()
    fn3()
    // ...
    return true
  }
})
function fn1() {
  console.log('做第一件事')
}
function fn2() {
  console.log('做第二件事')
}
function fn3() {
  console.log('做第三件事')
}