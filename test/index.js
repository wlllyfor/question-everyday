const str = 'hello'

function padStart1(str, length, char) {
  let res = ''
  let len = length - str.length
  for (let i = 0; i < len; i++) {
    res += char
  }
  return res + str
}

function padStart2(str, length, char) {
  let len = Math.floor(length) - str.length
  if (len < 1) {
    return str
  }
  let total = ''
  while(true) {
    if (len % 2 === 1) {
      total += char
    }
    if (len === 1) {
      return total + str
    }
    len = parseInt(len / 2)
    char += char
  }
}

function padStart3(str, length, char) {
  let len = Math.floor(length) - str.length
  if (len < 1) {
    return str
  }
  let total = ''
  while(true) {
    if (len & 1) {
      total += char
    }
    if (len === 1) {
      return total + str
    }
    len = len >> 1
    char += char
  }
}

console.log('循环 10000 次')
console.time('直接拼接')
for(let i = 0; i< 10000; i++) {
  padStart1(str, 10000, '.')
}
console.timeEnd('直接拼接')

console.time('二分法')
for(let i = 0; i< 10000; i++) {
  padStart2(str, 10000, '.')
}
console.timeEnd('二分法')

console.time('二分法 + 位运算')
for(let i = 0; i< 10000; i++) {
  padStart3(str, 10000, '.')
}
console.timeEnd('二分法 + 位运算')

