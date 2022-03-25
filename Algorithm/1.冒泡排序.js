/**
 * 思路，循环数组，两两比较
 * 如果前者比后者大，就换位置
 * 第一轮循环结束后最大的就到数组最后面去了
 * 双层循环，依次把第二大、第三大、... 的元素放到最后面去
 */
function bubbleSort (arr) {
  for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++ ) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const arr = [5,4,3,2,1]

console.log(bubbleSort(arr))



