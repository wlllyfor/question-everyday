/**
 * 思路，遍历数组，选出最小值
 * 把最小值挑出来，push 进新数组，原数组删除这个最小值
 * 只要原数组有值，就重复上面的过程，原数组删完时，也就选完了
 * 返回新数组
 */

function selectSort(arr) {
  const res = []
  while(arr.length) {
    let minIndex = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i
      }
    }
    res.push(arr[minIndex])
    arr.splice(minIndex, 1)
  }
  return res
}

const arr = [7,2,6,8,1,5,13,12,4,9,17]

console.log(selectSort(arr))