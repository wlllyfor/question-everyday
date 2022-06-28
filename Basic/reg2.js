
function formatMoney(money) {
  const arr = money.split('.')
  arr[0] = arr[0].replace(/(?!^)(?=(\d{3})+$)/g, ',')
  return arr.join('.')
}

console.log(formatMoney('100000000.23'))