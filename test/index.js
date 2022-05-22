function mySqrt (x) {
  let left = 0
  let right = x + 1
  console.log(right)
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    console.log(mid)
    if (mid * mid > x) {
      right = mid
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right - 1
//   return left - 1
};

console.log(mySqrt(2147483647))