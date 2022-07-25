

function myInterval(fn, delay, ...args) {
  let timer = null;
  function helper(){
    fn.apply(this, args);
    timer = setTimeout(helper, delay) // 递归调用
  }
  setTimeout(helper, delay)
}

// myInterval(() => {
//   console.log('1 :>> ', 1);
// }, 1000)

// setInterval(function () {
//   console.log('执行 fn')
//   if (a.b) {
//     // do something
//   }
// }, 1000)

// const startDate = new Date();
// let endData;
// // 第一个调用会被略过
// setInterval(() => {
//   console.log('start');
//   console.log(startDate.getTime());
//   console.log(endDate.getTime());
//   console.log('end');
// }, 1000);
// while (startDate.getTime() + 2 * 1000 > (new Date()).getTime()) {
// }
// endDate = new Date();


// let start = Date.now()
// setInterval(() => {
//   const now = Date.now()
//   linearSearch(createNums(10000000), 10000000)
//   console.log('interval', now - start)
//   start = now
// }, 1000);

let start = Date.now()
myInterval(() => {
  const now = Date.now()
  linearSearch(createNums(100000000), 100000000)
  console.log('interval', now - start)
  start = now
}, 1000);


// 线性查找列表 nums 中是否存在 target，存在返回 true，不存在返回 false
function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return true;
    }
  }
  return false;
}

// 创建长度为 n 的数组
function createNums(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res[i - 1] = i;
  }
  return res;
}

// console.time('线性查找')
// linearSearch(createNums(100000000), 100000000)
// console.timeEnd('线性查找')
