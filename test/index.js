
function createArr(n) {
  const arr = []
  for(let i = 0; i < n; i++) {
    arr[i] = i + 1
  }
  return arr
}

console.log(createArr(100))

function createArr1(n) {
  return Array.from({length:n},(item,i)=> i+1)
}

console.log(createArr1(100))


function createArr2(n) {
  return Array.from(new Array(n + 1).keys()).slice(1)
}

console.log(createArr2(100))