/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 排序
 * O(nlogn)
 */
// var findRepeatNumber = function(nums) {
//   nums.sort()
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       return nums[i]
//     }
//   }
// };

/**
 * 暴力法
 * O(n^2)
 */
function findRepeatNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[i]
      }
    }
  }
}

/**
 * 空间换时间
 */
function findRepeatNumber(nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = true
    } else {
      return nums[i]
    }    
  }
}