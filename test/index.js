// function isValidDate(date) {
//   let re = isLeapYear(date) ? /^\d{4}-(((0[13578])|(1[02]))-(0[1-9]|[12]\d|3[01]))|(((0[469])|(11))-(0[1-9]|[12]\d|30))|02-([01]\d|2[0-9])$/ : /^\d{4}-(((0[13578])|(1[02]))-(0[1-9]|[12]\d|3[01]))|(((0[469])|(11))-(0[1-9]|[12]\d|30))|02-([01]\d|2[0-8])$/
//   return re.test(date)
// }

// function isLeapYear(date) {
//   const year = date.slice(0, 4)
//   const isNormalLeapYear = year % 4 === 0 && year % 100 !== 0
//   const isSpecialLeapYear = year % 400 === 0
//   return isNormalLeapYear || isSpecialLeapYear
// }

// console.log(isValidDate('2022-02-30'))
// console.log(isValidDate('2022-02-28'))
// console.log(isValidDate('2022-02-29'))
// console.log(isValidDate('2024-02-29'))
// console.log(isValidDate('2024-04-31'))


