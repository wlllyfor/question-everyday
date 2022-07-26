// function myInterval (fn, delay) {
//   let timer = null
//   function helper() {
//     fn()
//     timer = setTimeout(() => {
//       helper()
//     }, delay)
//   }
//   setTimeout(helper, delay)
//   return () => clearTimeout(timer)
// }

// setInterval(function () {
//   console.log('执行 fn')
//   if (a.b) {
//     // do something
//   }
// }, 1000)

// let start = Date.now()
// setInterval(() => {
//   const now = Date.now()
//   console.log('interval', now - start)
//   start = now
// }, 1000);

// myInterval(function () {
//   console.log('执行 fn')
//   if (a.b) {
//     // do something
//   }
// }, 1000)


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

// let start = Date.now()
// myInterval(() => {
//   const now = Date.now()
//   linearSearch(createNums(100000000), 100000000)
//   console.log('interval', now - start)
//   start = now
// }, 1000);


// // 线性查找列表 nums 中是否存在 target，存在返回 true，不存在返回 false
// function linearSearch(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }

// // 创建长度为 n 的数组
// function createNums(n) {
//   let res = [];
//   for (let i = 1; i <= n; i++) {
//     res[i - 1] = i;
//   }
//   return res;
// }

// console.time('线性查找')
// linearSearch(createNums(100000000), 100000000)
// console.timeEnd('线性查找')


// 倒计时间隔为 1000 毫秒
const gap = 1000
// 活动开始倒计时初始值，假设为 1 分钟
let totalTime = 60000  
// 辅助变量，每次递归调用 + 1，用来计算时间偏差
let count = 0
const start = Date.now()
let timer
if( totalTime >= 0) {
  timer = setTimeout(interval, gap)
}
 
function interval () {
  count++
  // 计算出当前执行倒计时的时间与实际应执行时间的偏差
  const offset = Date.now() - (start + count * gap) 
  let calcTime = gap - offset
  if (calcTime < 0) { 
    calcTime = 0 
  }
  totalTime -= gap
  console.log(`误差：${offset} ms，下一次执行：${calcTime} 毫秒后，离活动开始还有：${totalTime} 毫秒`)
  if (totalTime < 0) {
    clearTimeout(timer)
  } else {
    // 下一次执行的时间，就用计算后校准的时间 calcTime
    timer = setTimeout(interval, calcTime)
  }
}