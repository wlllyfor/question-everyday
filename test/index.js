// function fn(arr) {
//   for(let i=1 ;i < arr.length; i = i * 2) {
//     console.log(arr[i])
//   }
// }

function fn(arr) {
  for(let i = arr.length - 1 ;i >0; i = Math.floor(i / 2)) {
    console.log(arr[i])
  }
}

fn([1,2,3,4,5,6,7,8,9,10])