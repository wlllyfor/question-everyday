/**
 * 找一个标识位 flag，比 flag 小的放左边，比 flag 大的放右边
 * 左边和右边重复上面的过程
 * 最后把左边、flag 和右边拼接起来
 */

 function quickSort(arr) {
  if (arr.length < 2) { // 递归终止条件
    return arr
  }
  let flag = arr[0] // 随便取一个标识位
  const left = []
  const right = []
  for(let i = 1; i< arr.length; i++) { // 标识位取的第 0 个元素，i就从 1 开始
    if (arr[i] < flag) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), flag, ...quickSort(right)]
}


// /**
//  * 原地快排
//  * 和普通快排的思路是一样的，只是不需要额外数组辅助，是通过交换数组内元素位置实现的
//  * 
//  * [7,2,6,8,1,5,13,12,4,9,17]
//  * 
//  * 定义一个标识位 flag，随便取数组中一个值，这里就取 arr[0] => 7
//  * 定义两个指针，i 和 j
//  * i 从左边开始往右边走，j 从右边开始往左走
//  *
//  *  i->                  <-j
//  * [7,2,6,8,1,5,13,12,4,9,17]
//  * 
//  * i 指针找到一个比 flag 大的 => 8
//  * j 指针找到一个比 flag 小的 => 4
//  * 这时 i 和 j 还没相遇，交换指针对应的元素位置，同时i++，j--
//  * 
//  *          i->       <-j
//  *   [7,2,6,8,1,5,13,12,4,9,17]
//  *            i->   <-j
//  *   [7,2,6,4,1,5,13,12,8,9,17]
//  * 
//  * 两个指针相遇时，再交换标识位 flag 和较小一边最右边的那个元素，也就是指针 i-1 对应元素
//  * 
//  *          <-j i-> 
//  * [7,2,6,4,1,5,13,12,8,9,17]
//  * [5,2,6,4,1,7,13,12,8,9,17]
//  * 
//  * 于是数组就被拆分成了两个部分
//  * 
//  * 5,2,6,4,1,7  这一部分小于等于标识位 7
//  * 13,12,8,9,17 这一部分大于标识位 7
//  * 
//  * 然后递归，对这两个部分做同样的事情
//  * 递归条件为 i < j，也就是每个小部分至少要有两个元素才能继续递归
//  */

//  function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]]
// }

// function findIndex (arr, i, j) {
//   let init = i
//   let flag = arr[init]

//   i++
//   while(i <= j) {
//     while (arr[i] < flag) {
//       i++
//     }
//     while (arr[j] > flag) {
//       j--
//     }

//     if (i < j) {
//       swap(arr, i, j)
//       i++
//       j--
//     } 
//   }
//   swap(arr, init, i - 1)
//   return i
// }

// function quickSort (arr, start, end) {
//   if (start < end) {
//     const index = findIndex(arr, start, end)
//     quickSort(arr, start, index - 1)
//     quickSort(arr, index, end)
//   }
//   return arr
// }


// const arr = [7,2,6,8,1,5,13,12,4,9,17]

// console.log(quickSort(arr, 0, arr.length - 1))