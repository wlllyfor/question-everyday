function padStart1(str, length, char) {
  let res = ''
  let len = length - str.length
  for (let i = 0; i < len; i++) {
    res += char
  }
  return res + str
}


function padStart2(str, length, char) {
  return Array(length - str.length + 1).join(char) + str
}

/**
 * 二分的思想来拼接字符串
 * 
 * 假设需要拼接的长度为 len ，要拼接的字符 char 是 'x'
 * 
 * 对 len 二分，每次操作 len = parseInt(len / 2) 
 * 每次操作 char 翻倍，char += char，就不用一个一个拼接了
 * 
 * 'x'
 * 'xx'
 * 'xxxx'
 * 'xxxxxxxx' 
 * 
 * 拼接字符串的时间复杂度从 O(n) 降到 O(lgn)
 * 
 * 当 len = 1 时，说明已经是最小单位了，就可以返回了
 * 假设 len = 7，最终要返回的结果为 total
 * 
 * 遇到奇数的情况，也就是 len % 2 === 1 时，total += char 
 * 
 * 初始化    total ''         char x      len 7
 * 第一次操作 total x          char xx     len parseInt(7 / 2)  = 3
 * 第二次操作 total xxx        char xxxx   len parseInt(3 / 2)  = 1
 * 第三次操作 total xxxxxxx 
 * 
 * 都是偶数的情况，假设 len = 4，就是下面这种
 * 
 * 第一次操作 total ''       char xx     len parseInt(4 / 2)  = 2
 * 第二次操作 total ''       char xxxx   len parseInt(2 / 2)  = 1
 * 第三次操作 total xxxx
 * 
 * 
 */
 function padStart3(str, length, char) {
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

console.log(padStart(str, 10, '.'))
