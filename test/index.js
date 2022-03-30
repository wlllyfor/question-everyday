let a = 100
const foo = () => () => {
  console.log(this.a)
}

const obj1 = {
  a: 2
}

const obj2 = {
  a: 3
}

const bar = foo.call(obj1)
bar.call(obj2)