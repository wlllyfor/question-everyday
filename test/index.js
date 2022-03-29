const o1 = {
  text: 'o1',
  fn () {
    return this.text
  }
}

const o2 = {
  text: 'o2',
  fn: o1.fn
}


console.log(o1.fn()) 
console.log(o2.fn()) 