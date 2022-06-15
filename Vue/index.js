const userInfo = {
  name: 'lin',
  age: 18
}

Object.defineProperty(userInfo, 'name', {
  set(newVal) {
    val = newVal
  }
})