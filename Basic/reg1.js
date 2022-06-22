// 1.匹配包含 hello 的字符串

const re = /hello/

re.test('hello world!') // true
re.test('hi, hello') // true
re.test('hell') // false

// 2.匹配以 hello 开头的字符串

const re = /^hello/

re.test('hello world!') // true
re.test('hi, hello') // false

// 3. 匹配以 hello 结尾的字符串

const re = /hello$/

re.test('hello world!') // false
re.test('hi, hello') // true

// 16.匹配除换行符之外的所有字符

const re = /./

// 9. 匹配一对括号

const re = /\(\)/

re.test('()') // true

// 4. 匹配 bar、car、far、mar、var

const re = /[bcfmv]ar/

// 17. 匹配所有包含 ar 的字符，除了 bar 和 car，ar 的前面一定有字符。

const re = /[^bc]ar/

// 5. 匹配 javascript、Javascript、javaScript、JavaScript

const re = /[Jj]ava[Ss]cript/

re.test('javascript') // true
re.test('Javascript') // true
re.test('javaScript') // true
re.test('JavaScript') // true

// 18. 匹配 d-m 之间的小写字符

const re = /[d-m]/

// 19. 匹配 5-8 之间的数字

const re = /[5-8]/

// 20 匹配字母、数字和下划线

const re = /\w/ // 等价于 /[0-9a-zA-Z_]/


// 29 匹配非单词字符

const re = /\W/ // 等价于 /[^0-9a-zA-Z_]/

// 30 匹配数字字符

const re = /\d/ // 等价于 /[0-9]/

// 31 匹配非数字字符

const re = /\D/ // 等价于 /[^0-9]/

// 32 匹配空白字符

const re = /\s/ 

// 33 匹配非空白字符

const re = /\S/ 


// 6. 判断一个字符是否全由数字和大小写字母组成

const re = /^[0-9a-zA-Z]+$/

re.test('1aA') // true
re.test('1aA>') // false

// 7. 匹配 color 和 colour

const re = /colou?r/

re.test('color') // true
re.test('colour') // true

// 8. 匹配 br、bar、baar、baaar、baaaar

const re = /ba*r/

re.test('br') // true
re.test('bar') // true
re.test('baar') // true

// 21. 匹配 bar、baar、baaar、baaaar

const re1 = /ba+r/

re.test('br') // false
re.test('bar') // true
re.test('baar') // true

// 23. 匹配 baaaaaaaaaar，其中 a 重复了 10 次

const re = /ba{10}r/

// 10. 在下方字符串中，匹配字母 a 连续出现至少 2 次的字符串
// bar baar baaar baaaar

const re = /ba{2,}r/


// 22. 在下方字符串中，匹配字母 a 连续出现 1-3 次的字符串
// br bar baar baaar baaaar

const re = /ba{1,3}r/

// 11. 匹配类电话号码，格式为 023-88688

const re = /^\d{3}-\d{5}$/

// 12. 匹配类电话号码，格式为 023-88688 或者 0123-8868

const re = /^\d{3,4}-\d{4,5}$/

// 13 匹配类电话号码，格式为 123-88688 或者 12388688，要求第一位必须大于 0

const re = /[1-9]\d{2}-?\d{6}/

// 14. 匹配电话号码，必须是 11 位数字，第一位是 1，第二位是 [3,4,5,7,8]中任意一个，后面 9 位是任意数字

const re = /^1[34578]\d{9}$/

// 15. 匹配 .png 文件

const re = /^.+\.png$/

re.test('xxx.png') // true
re.test('xxx.xxx.png') // true
re.test('.png') // false

// 25. 匹配 carcarcar

const re = /(car){3}/

// 26. 匹配 dogcatdogcat

const re = /(dog)(cat)\1\2/

// 24. 取出 [object Xxx] 中的 Xxx，比如：
// 取出 [object Array] 中的 Array
// 取出 [object Object] 中的 Object

const re = /^\[object (.+)\]$/
const str = '[object Array]'
const res = str.replace(re, "$1")

// 27. (?:) 非捕获括号

const re = /(?:dog)(cat)\1/

re.test('dogcatcat') // true
re.test('dogdogcat') // false

// 28. 匹配 `${T}at${T}`，其中 T 为一个变量，T 的值为 [b,d,f,h] 中任意一个

const re = /(b|d|f|h)at\1/

re.test('batb') // true
re.test('datd') // true
re.test('batd') // false

// 34. 在字符 '2022年月22日' 中插入月份

const re = /(?=月)/
const str = '2022年月22日'
const month = 6
str.replace(re, month)

const re1 = /(?<=年)/
const str = '2022年月22日'
const month = 6
str.replace(re, month)

// 35 获取字符 '2022年6月22日' 中的月份
const re = /\d(?=月)/
const str = '2022年6月22日'
const found = str.match(re)
console.log(found[0]) // '6'

const re = /(?<=年)\d/
const str = '2022年6月22日'
const found = str.match(re)
console.log(found[0]) // '6'

// 36 替换字符 '2022年6月22日' 中的月份
const re = /\d(?=月)/
const str = '2022年6月22日'
const month = 7
str.replace(re, 7)

const re = /(?<=年)\d/
const str = '2022年6月22日'
const month = 7
str.replace(re, 7)

// (?!)

// (?<!)

// 37. 获取所有的 .png 文件

const re = /^\w+\.png$/g

const str = 'aaa.png,bbb.jpg,ccc.png,ddd.svg'

const found = str.match(re) // ['aaa.png', 'ccc.png']


// 38. 匹配 16 进制颜色值
// 首字母是 #
// 后面是 0-9 a-f A-f 的任意组合，数量为 3 或 6 个。

const re = /^#([\da-f]{6}|[\da-f]{3})$/i
// const re = /^#(?:[\da-f]{6}|[\da-f]{3})$/i

re.test('#100') // true
re.test('#fffFFF') // true
re.test('#F1f0f2') // true
re.test('#') // false
re.test('#1000') // false
re.test('#fffeeed') // false
re.test('#sss') // false

// 39. 匹配 24 小时制时间
// 00:00 到 23:59

const re = /^([01]\d|2[0-3]):[0-5]\d$/
// const re = /^(?:[01]\d|2[0-3]):[0-5]\d$/

re.test('00:00') // true
re.test('23:59') // true
re.test('01:22') // true
re.test('19:30') // true
re.test('24:00') // false
re.test('20:60') // false

// 40. 匹配 24 小时制时间（可忽略 0）
// 1:23
// 4:2
// 仅做练习用，现实场景时间一般都会补零

const re = /^((0?|1)\d|2[0-3]):(0?|[1-5])\d$/
// const re = /^(?:(?:0?|1)\d|2[0-3]):(?:0?|[1-5])\d$/

// 41. 匹配年月日
// yyyy-mm-dd 格式
// 2022-06-08

const re = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
// const re = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/

re.test('2022-01-01') // true
re.test('2022-12-31') // true
re.test('2022-04-31') // true 不合常理，姑且算它对吧
re.test('2022-02-31') // true 不合常理，姑且算它对吧

// 42. 匹配年月日，不能是无效的日期
// 1[02]

function isValidDate(date) {
  let re = isLeapYear(date) ? /^\d{4}-(((0[13578])|(1[02]))-(0[1-9]|[12]\d|3[01]))|(((0[469])|(11))-(0[1-9]|[12]\d|30))|02-([01]\d|2[0-9])$/ : /^\d{4}-(((0[13578])|(1[02]))-(0[1-9]|[12]\d|3[01]))|(((0[469])|(11))-(0[1-9]|[12]\d|30))|02-([01]\d|2[0-8])$/
  return re.test(date)
}

function isLeapYear(date) {
  const year = date.slice(0, 4)
  const isNormalLeapYear = year % 4 === 0 && year % 100 !== 0
  const isSpecialLeapYear = year % 400 === 0
  return isNormalLeapYear || isSpecialLeapYear
}

// 43. Window 风格文件路径
// F:\
// F:\work\
// F:\work\frontEnd
// F:\work\frontEnd\index.html

const re = /^[A-Z]:\\(.+\\?)*(\w+\.\w+)?$/
// const re = /^[A-Z]:\\(?:.+\\?)*(?:\w+\.\w+)?$/

// 44. Window 风格文件路径，文件名不能包含特殊字符
// 文件夹和文件名不能包含 ['\', '/', ':', '*', '?', '"', '<', '>', '|', ] 这 9 个字符

const re = /^[A-Z]:\\([^\\:*?"<>|]+\\?)*(\w+\.\w+)?$/
// const re = /^[A-Z]:\\(?:[^\\:*?"<>|]+\\?)*(?:\w+\.\w+)?$/

// 45. Unix 风格文件路径
