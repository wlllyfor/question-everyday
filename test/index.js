const arr = [1,,,2,3]
let fn = (pre, cur) => pre + cur;
// [].reduce(fn)
[1,2,3].reduce(1)
// [1,2,3].reduce(fn,1)
// myReduce([]) // 数组长度为 0 且没有初始值时，应该有异常提示。
// myReduce([1,2,3], 1) // 传入的 callback 函数不是一个函数时，应该有异常提示。

function myReduce(arr, callback, initValue) {
  let hasInitValue = initValue !== undefined // 定义一个变量记录是否有初始值。

  // 有初始值时，pre 初始值为初始值，否则为 arr[0]。
  let pre = hasInitValue ? initValue : arr[0]

  // 有初始值时，cur 初始值为 arr[0]，否则为 arr[1]，这里先用一个变量 index 记录一下，后面在循环里用。
  let index = hasInitValue ? 0 : 1

  // 循环时，i 的初始值为 index。
  for (let i = index; i < arr.length; i++) {
    let cur = arr[i]
    pre = callback(pre, cur, i, arr) // 每调用一次 callback，就把返回值赋值给 pre。
  }

  return pre
}