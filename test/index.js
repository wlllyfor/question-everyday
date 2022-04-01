const foo = {
  name: 'lin',
  sayName() {
    console.log(this.name)
  }
}

const bar = {
  name: 'xxx'
}

foo.sayName.call(bar)   // ?
foo.sayName.apply(bar)  // ?
foo.sayName.bind(bar)() // ?