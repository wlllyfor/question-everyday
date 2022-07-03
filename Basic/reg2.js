const re = /^[A-Z]:\\([^\\\/:*?"<>|]+\\?)*(\w+\.\w+)?$/

const str1 = 'F:\\work\\front\\End'
const str2 = 'F:\\work\\front/End'
const str3 = 'F:\\work\\front:End'
const str4 = 'F:\\work\\front*End'
const str5 = 'F:\\work\\front?End'
const str6 = 'F:\\work\\front"End'
const str7 = 'F:\\work\\front<End'
const str8 = 'F:\\work\\front>End'
const str9 = 'F:\\work\\front|End'

console.log(re.test(str1)) // false
console.log(re.test(str2)) // false
console.log(re.test(str3)) // false
console.log(re.test(str4)) // false
console.log(re.test(str5)) // false
console.log(re.test(str6)) // false
console.log(re.test(str7)) // false
console.log(re.test(str8)) // false
console.log(re.test(str9)) // false