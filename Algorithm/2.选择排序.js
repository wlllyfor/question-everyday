/**
 * 思路：循环数组，记录第一次循环的最小值下标
 * 如果最小值下标不是0，就和第一个元素交换位置，这样第一次循环后最小的元素就到最前面去了
 * 双层循环，依次把第二小、第三小、... 的元素移到最前面去
 */

 function selectSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}

const arr = [6, 3, 8, 19, 1]
// 6,3,8,19,1

// 1,3,8,19,6
//   3,6,19,8
//     6,8,19

console.log(selectSort(arr))
