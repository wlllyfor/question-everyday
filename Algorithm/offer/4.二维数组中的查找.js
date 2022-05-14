/**
 * matrix[1,2]
 * 暴力法
 * O(n^2)
 */
function findNumberIn2DArray (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === target) {
        return true
      }       
    }
  }
  return false
};

/**
 * 线性查找
 * O(n + m)
 */
function findNumberIn2DArray (matrix, target) {
  if (matrix.length === 0) {
    return false
  }
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true
    } else if (matrix[row][col] > target) {
      col--
    } else {
      row++
    }
  }
  return false
}
// function findNumberIn2DArray (matrix, target) {
//   if (matrix.length === 0) {
//     return false
//   }
//   let row = matrix.length - 1
//   let col = 0
//   while (row >= 0 && col < matrix[0].length) {
//     if (matrix[row][col] === target) {
//       return true
//     } else if (matrix[row][col] < target) {
//       col++
//     } else {
//       row--
//     }
//   }
//   return false
// }