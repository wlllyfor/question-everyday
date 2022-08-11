Promise.resolve().then(() => {
  console.log(1);
  return Promise.resolve();
}).then(() => {
  console.log(2)
})

Promise.resolve().then(() => {
  console.log(3);
}).then(() => {
  console.log(4);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
}).then(() =>{
  console.log(7);
})

// 1 3 4 5 2 6 7