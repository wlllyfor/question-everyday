const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}

// const fetch1 = () => time(2000).then((resolve) => {
//   console.log(1);
//   return 1
// })
// const fetch2 = () => time(1000).then(() => {
//   console.log(2);
//   return 2
// })
// const fetch3 = () => time(1000).then(() => {
//   console.log(3);
//   return 3
// })

const fetch1 = () => {
  return new Promise((resolve) => {
    resolve(1)
  })
}

const fetch2 = () => {
  return new Promise((resolve) => {
    resolve(2)
  })
}

const fetch3 = () => {
  return new Promise((resolve) => {
    resolve(3)
  })
}

mergePromise([fetch1, fetch2, fetch3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
})

function mergePromise (fnArray) {
  // 存放每个ajax的结果
  const data = [];
  let p = Promise.resolve();
  fnArray.forEach(fn => {
  	// 第一次的then为了用来调用ajax
  	// 第二次的then是为了获取ajax的结果
    p = p.then(fn).then(res => {
      data.push(res);
      return data; // 把每次的结果返回
    })
  })
  // 最后得到的promise它的值就是data
  return p;
}
