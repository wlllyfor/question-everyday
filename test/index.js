const num = -0.9

console.log(0.9 | 0)
console.log(-1.9 | 0)
console.log(1.2 | 0)
console.log(1.6 | 0)

console.log('1111 :>> ', 1111);

console.log(0.9 | 0.9)  // 输出 0  ✔️
console.log(-1.9 | -1.9) // 输出 0 ✔️
console.log(1.2 | 1.2)  // 输出 1  ✔️
console.log(1.6 | 1.6)  // 输出 1  ✔️

console.log((2 ** 31 - 1) | 0)