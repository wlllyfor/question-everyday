// 1.匹配包含 hello 的字符串

const re = /hello world/

const str1 = 'hello world'
const str2 = 'hello the world'
const str3 = 'hi hello world,'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // false
console.log(re.test(str3)) // true

// 2.匹配以 hello 开头的字符串

const re = /^hello/

const str1 = 'hello world!'
const str2 = 'hi, hello'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // false

// 3. 匹配以 hello 结尾的字符串

const re = /hello$/

const str1 = 'hello world!'
const str2 = 'hi, hello'

console.log(re.test(str1)) // false
console.log(re.test(str2)) // true

// 4.匹配除换行符之外的所有字符

const re = /./

const str1 = 'a'
const str2 = '1'
const str3 = ';'
const str4 = ' '

// 换行
const str5 = `

`

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // true
console.log(re.test(str5)) // false

// 5. 匹配一对括号

const re = /\(\)/

const str1 = '()'
const str2 = 'fn()'
const str3 = 'fn(a)'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // false

// 6. 匹配 bar、car、far、mar、var

const re = /[bcfmv]ar/

const str1 = 'I have a car'
const str2 = 'var foo = 1'
const str3 = 'so far'
const str4 = 'go to bar'
const str5 = 'The plan was marred'


console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // true
console.log(re.test(str5)) // true

// 7. 匹配所有包含 ar 的字符，ar 的前面一定有字符，但是不能是 bar 和 car。

const re = /[^bc]ar/

const str1 = 'bar' 
const str2 = 'car'
const str3 = 'var'
const str4 = 'far'
const str5 = 'ar'

console.log(re.test(str1)) // false
console.log(re.test(str2)) // false
console.log(re.test(str3)) // true
console.log(re.test(str4)) // true
console.log(re.test(str5)) // false

// 8. 匹配 javascript、Javascript、javaScript、JavaScript

const re = /[Jj]ava[Ss]cript/

const str1 = 'javascript'
const str2 = 'Javascript'
const str3 = 'javaScript'
const str4 = 'JavaScript'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // true

// 9. 匹配 3-8 之间的数字

const re = /[3-8]/

const str1 = '3'
const str2 = '5'
const str3 = '8'
const str4 = '2'
const str5 = '9'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // false
console.log(re.test(str5)) // false

// // 11. 匹配字母、数字和下划线

// const re = /\w/ // 等价于 /[0-9a-zA-Z_]/


// // 12. 匹配非单词字符

// const re = /\W/ // 等价于 /[^0-9a-zA-Z_]/

// // 13. 匹配数字字符

// const re = /\d/ // 等价于 /[0-9]/

// // 14. 匹配非数字字符

// const re = /\D/ // 等价于 /[^0-9]/

// // 15. 匹配空白字符

// const re = /\s/ 

// // 16. 匹配非空白字符

// const re = /\S/ 


// 10. 匹配数字、小写字母和大写字母

const re = /[0-9a-zA-Z]/

const str1 = '1'
const str2 = 'a'
const str3 = 'A'
const str4 = '-'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // false

// 11. 匹配 color 和 colour

const re = /colou?r/

const str1 = 'color'
const str2 = 'colour'
const str3 = 'colouur'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // false

// 12. 匹配 br、bar、baar、baaar、baaaar

const re = /ba*r/

const str1 = 'br'
const str2 = 'bar'
const str3 = 'baar'
const str4 = 'baaaaaaaaar'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // true

// 13. 匹配 bar、baar、baaar、baaaar

const re = /ba+r/

const str1 = 'br'
const str2 = 'bar'
const str3 = 'baar'
const str4 = 'baaaaaaaaar'

console.log(re.test(str1)) // false
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // true

// 14. n 次

const re = /\w{4}/g

const str = 'hi nice to meet you'

console.log(str.match(re))

// 15. n 次或更多次

// 在下方字符串中，匹配字母 a 连续出现至少 2 次的字符串

const re = /ba{2,}r/g

const str = 'br bar baar baaar baaaar'

console.log(str.match(re, str))


// 16. 具体范围次
// 在下方字符串中，匹配字母 a 连续出现 1-3 次的字符串
// br bar baar baaar baaaar

const re = /ba{1,3}r/g

const str = 'br bar baar baaar baaaar'

console.log(str.match(re, str))

// 17.在下方字符串中，获取到被双引号包裹的单词

const re = /".+?"/g

const str = 'My name is "xxx", I am "18" years old.'

console.log(str.match(re)) // ['"xxx"','"18"']


// // 18. 匹配类电话号码，格式为 023-88688

const re = /^\d{3}-\d{5}$/

const str1 = '023-99699'
const str2 = '023-9969' 
const str3 = '02399699' 

console.log(re.test(str1)) // true
console.log(re.test(str2)) // false
console.log(re.test(str3)) // false

// 19 匹配类电话号码，格式为 123-88688 或者 12388688，要求第一位必须大于 0

const re = /^[1-9]\d{2}-?\d{5}$/

const str1 = '123-88688'
const str2 = '12388688'
const str3 = '02388688'
const str4 = '123-886889'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // false
console.log(re.test(str4)) // false

// 20. 匹配电话号码，必须是 11 位数字，第一位是 1，第二位是 [3,4,5,7,8]中任意一个，后面 9 位是任意数字

const re = /^1[34578]\d{9}$/

const str1 = '15340568542'
const str2 = '1869542541'
const str3 = '19999999999'
const str4 = '012345678901'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // false
console.log(re.test(str3)) // false
console.log(re.test(str4)) // false

// 21. 匹配 carcarcar

const re = /(car){5}/

const str1 = 'carcarcarcarcar'
const str2 = 'car'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // false


// 22. 匹配 dogcatXcatdog

const re = /(dog)(cat)X\2\1/

const str1 = 'dogcatXcatdog'
const str2 = 'dogcatX'
const str3 = 'dogcatXdogcat'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // false
console.log(re.test(str3)) // false

// 23. 取出 [object Xxx] 中的 Xxx，比如：
// 取出 [object Array] 中的 Array
// 取出 [object Object] 中的 Object

const re = /^\[object (.+)\]$/

const str1 = '[object Array]'
const str2 = '[object Object]'
const str3 = '[object Number]'


console.log(str1.replace(re, "$1")) // 'Array'
console.log(str2.replace(re, "$1")) // 'Object'
console.log(str3.replace(re, "$1")) // 'Number'

// 24. (?:) 非捕获括号

// 有时候，需要分组，但是却不想捕获分组的成员，就可以用到非捕获括号
// 匹配 dogdogcatXcatcat

const re = /(?:dog){2}(cat)X\1{2}/

const str1 = 'dogdogcatXcatcat'
const str2 = 'dogdogcatX'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // false


// 25. 匹配 `${T}at${T}`，其中 T 为一个变量，T 的值为 [b,d,f,h] 中任意一个

const re = /(b|d|f|h)at\1/

const str1 = 'batb'
const str2 = 'datd'
const str3 = 'batd'

console.log(re.test('batb')) // true
console.log(re.test('datd')) // true
console.log(re.test('batd')) // false

// 26.身份证
// 身份证为15位或者18位，15位的全为数字，18位的前17位为数字，最后一位为数字或者大写字母”X“

const re = /^(\d{15}|\d{17}[\dX])$/

const str1 = '500130200002046543'
const str2 = '500130200002046'
const str3 = '50013020000204623X'

console.log(re.test(str1))
console.log(re.test(str2))
console.log(re.test(str3))

// 27. 在字符 '2022年月22日' 中插入月份

const re = /(?=月)/
const str = '2022年月22日'
const month = 6
str.replace(re, month)

const re1 = /(?<=年)/
const str = '2022年月22日'
const month = 6
str.replace(re, month)

// 28 获取字符 '2022年6月22日' 中的月份
const re = /\d(?=月)/
const str = '2022年6月22日'
const found = str.match(re)
console.log(found[0]) // '6'

const re = /(?<=年)\d/
const str = '2022年6月22日'
const found = str.match(re)
console.log(found[0]) // '6'

// // 28 替换字符 '2022年6月22日' 中的月份
// const re = /\d(?=月)/
// const str = '2022年6月22日'
// const month = 7
// str.replace(re, 7)

// const re = /(?<=年)\d/
// const str = '2022年6月22日'
// const month = 7
// str.replace(re, 7)

// 29 匹配除小时值以外的数字
const re = /\d+(?!PM)/g

const str = 'Date 8 Month 6 Year 2020 3 PM'

console.log(str.match(re))

// (?<!)
// 30 获取所有不是金额的数字（不是 $ 后面的数字）

const re = /(?<!\$)(\d+)/g

const str = '2022-6-8, I stole $5 from bank and count the money 100 times, 2022-6-9, I stole $8 from bank and count the money 200 times'

console.log(str.match(re))

// 31. 获取所有的 .png 文件

const re = /\w+.png/g

const str = 'aaa.png,bbb.jpg,ccc.png,ddd.svg,eee.jpg,fff.jpeg'

console.log(str.match(re)) // ['aaa.png', 'ccc.png']

// 32. 匹配版本号（只匹配格式）

const re = /^(\d+\.){2}\d+$/

const str1 = '0.0.0'
const str2 = '1.9.2'
const str3 = '01.01.01'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true


const re = /^(0\.|([1-9]\d*\.))(0\.|([1-9]\d*\.))(0|[1-9]\d*)$/

const str1 = '0.0.0'
const str2 = '1.9.2'
const str3 = '01.01.01'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // false


// 33. 匹配 16 进制颜色值
// 首字母是 #
// 后面是 0-9 a-f A-f 的任意组合，数量为 3 或 6 个。

const re = /^#([\da-f]{6}|[\da-f]{3})$/i
// const re = /^#(?:[\da-f]{6}|[\da-f]{3})$/i

const str1 = '#100'
const str2 = '#fffFFF'
const str3 = '#F1f0f2'
const str4 = '#'
const str5 = '#1000'
const str6 = '#fffeeed'
const str7 = '#sss'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // false
console.log(re.test(str5)) // false
console.log(re.test(str6)) // false
console.log(re.test(str7)) // false

// 34. 匹配 24 小时制时间
// 00:00 到 23:59

const re = /^([01]\d|2[0-3]):[0-5]\d$/
// const re = /^(?:[01]\d|2[0-3]):[0-5]\d$/

const str1 = '00:00'
const str2 = '23:59'
const str3 = '01:22'
const str4 = '19:30'
const str5 = '24:00'
const str6 = '20:60'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true
console.log(re.test(str4)) // true
console.log(re.test(str5)) // false
console.log(re.test(str6)) // false

// 35. 匹配 24 小时制时间（可忽略 0）
// 1:23
// 4:2
// 仅做练习用，现实场景时间一般都会补零

const re = /^((0?|1)\d|2[0-3]):(0?|[1-5])\d$/
// const re = /^(?:(?:0?|1)\d|2[0-3]):(?:0?|[1-5])\d$/

const str1 = '04:23'
const str2 = '4:23'
const str3 = '4:3'

console.log(re.test(str1)) // true
console.log(re.test(str2)) // true
console.log(re.test(str3)) // true

// 36.验证密码
// 8-16 位，必须包含数字和字母

const re = /(?=.*\d)(?=.*[a-zA-Z])^.{8,16}$/

const str1 = '123456'
const str2 = '12345678'
const str3 = '12345678q'
const str4 = '12345678qweQWE'
const str6 = '12345678qweQWE12345678'

console.log(re.test(str1)) // false
console.log(re.test(str2)) // false
console.log(re.test(str3)) // true
console.log(re.test(str4)) // true
console.log(re.test(str5)) // false

// 37.千分位分隔数字

const re = /(?!^)(?=(\d{3})+$)/g

const str1 = '100000'
const str2 = '1000000'
const str3 = '10000000'

console.log(str1.replace(re, ',')) // 100,000
console.log(str2.replace(re, ',')) // 1,000,000
console.log(str3.replace(re, ',')) // 10,000,000

// 38.千分位分隔数字（包含小数点）

function formatMoney(money) {
  const arr = money.split('.')
  arr[0] = arr[0].replace(/(?!^)(?=(\d{3})+$)/g, ',')
  return arr.join('.')
}

const str1 = '100000.00'
const str2 = '1000000.00'
const str3 = '10000000.00'
const str4 = '100.00'

console.log(formatMoney(str1)) // 100,000.00
console.log(formatMoney(str2)) // 1,000,000.00
console.log(formatMoney(str3)) // 10,000,000.00
console.log(formatMoney(str4)) // 100.00

// 39.手机号 3-4-4 分割

const re = /(?=(\d{4})+$)/g 

const str = '15487654321'

console.log(re.test(str)) // '154 8765 4321'

// 40.手机号 3-4-4 分割（输入过程中）

function formatMobile(mobile) {
  return mobile.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
}

const str1 = '1'
const str2 = '15'
const str3 = '153'
const str4 = '1534'
const str5 = '15345'
const str6 = '153456'
const str7 = '1534567'
const str8 = '15345678'
const str9 = '153456789'
const str10 = '1534567891'
const str11 = '15345678910'

console.log(formatMobile(str1)) // '1'
console.log(formatMobile(str2)) // '15'
console.log(formatMobile(str3)) // '153'
console.log(formatMobile(str4)) // '153 4'
console.log(formatMobile(str5)) // '153 45'
console.log(formatMobile(str6)) // '153 456'
console.log(formatMobile(str7)) // '153 4567'
console.log(formatMobile(str8)) // '153 4567 8'
console.log(formatMobile(str9)) // '153 4567 89'
console.log(formatMobile(str10)) // '153 4567 891'
console.log(formatMobile(str11)) // '153 4567 8910'

// 41.实现 trim

const myTrim = (str) => {
  return str.replace(/^\s*|\s*$/g, '')
}

const str1 = '   hello  '
const str2 = '  hello world  '

console.log(myTrim(str1)) // 'hello'
console.log(myTrim(str2)) // 'hello world'

// 42.匹配 id

const str = `<div id="app" >
  <p id="p1"></p>
  <div id="div1"></div>
</div>`

// const re = /id=".+?"/g
// const re = /id=".*"/g
const re = /id="[^"]+"/g

str.match(res)

// 43.判断标签是否成对
// <p>today is a good day!</p>    
// <p>today is a good day!</span>  

const str1 = '<p>today is a good day!</p>'
const str2 = '<p>today is a good day!</span>'

function isTagPair(str) {
  return /<([^>]+)>.+<\/\1>/.test(str)
}

console.log(isTagPair(str1))
console.log(isTagPair(str2))

// 44.将每个单词的首字母转换为大写
// hEllo, my nAme IS xxx
// Hello, My Name Is Xxx

const str = 'hEllo, my nAme IS xxx'

function formatFirstChar(str) {
	return str.toLowerCase().replace(/(^|\s)[a-zA-Z]/g, $1 => $1.toUpperCase());
}

console.log(formatFirstChar(str)) // Hello, My Name Is Xxx

// 45.驼峰化
// user_info -> userInfo
// we_chat_mini_app -> weChatMiniApp

const str1 = 'user_info'
const str2 = 'we_chat_mini_app'

function camelize(str) {
  return str.replace(/(_[a-z])/g, $1 => $1.slice(1).toUpperCase())
}

console.log(camelize(str1)) // userInfo
console.log(camelize(str2)) // weChatMiniApp

// 46.下划线化
// userInfo -> user_info
// weChatMiniApp -> we_chat_mini_app

const str1 = 'userInfo'
const str2 = 'weChatMiniApp'

function underlize(str) {
  return str.replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`)
}

console.log(underlize(str1)) // user_info
console.log(underlize(str2)) // we_chat_mini_app

// 47. Window 风格文件路径
// F:\
// F:\work\
// F:\work\frontEnd
// F:\work\frontEnd\index.html

const re = /^[A-Z]:\\(.+\\?)*(\w+\.\w+)?$/

const str1 = 'F:\\'
const str2 = 'F:\\work\\'
const str3 = 'F:\\work\\frontEnd'
const str4 = 'F:\\work\\frontEnd\\index.html'

console.log(re.test(str1))
console.log(re.test(str2))
console.log(re.test(str3))
console.log(re.test(str4))


// const re = /^[A-Z]:\\(?:.+\\?)*(?:\w+\.\w+)?$/

// 48. Window 风格文件路径，文件名不能包含特殊字符
// 文件夹和文件名不能包含 ['\', '/', ':', '*', '?', '"', '<', '>', '|', ] 这 9 个字符

const re = /^[A-Z]:\\([^\\:*?"<>|]+\\?)*(\w+\.\w+)?$/

const str1 = 'F:\\work\\front/End'
const str2 = 'F:\\work\\front:End'
const str3 = 'F:\\work\\front*End'
const str4 = 'F:\\work\\front?End'
const str5 = 'F:\\work\\front"End'
const str6 = 'F:\\work\\front<End'
const str7 = 'F:\\work\\front>End'
const str8 = 'F:\\work\\front|End'

console.log(re.test(str1))
console.log(re.test(str2))
console.log(re.test(str3))
console.log(re.test(str4))
console.log(re.test(str5))
console.log(re.test(str6))
console.log(re.test(str7))
console.log(re.test(str8))

// const re = /^[A-Z]:\\(?:[^\\:*?"<>|]+\\?)*(?:\w+\.\w+)?$/

// 49. 匹配年月日
// yyyy-mm-dd 格式
// 2022-06-08

const re = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
// const re = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/

const str1 = '2022-01-01'
const str2 = '2022-12-32'
const str3 = '2022-04-31'
const str4 = '2022-02-31'

re.test(str1) // true
re.test(str2) // false
re.test(str3) // true 
re.test(str4) // true 

// 49-1. 匹配年月日，不能是无效的日期
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

// 50.获取图片地址

// 要求：获取某个网页的所有图片地址

const getImgs = (str) => {
  const re = /<img[^>]+src="((https?:)\/\/[^"]+)"[^>]*?>/gi

  return str
    .match(re)
    .map(item => item.replace(re, '$1'))
}