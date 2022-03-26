const cache = {}

function isPrime (n) {
  if (n in cache) {
    console.log(`cache中有${n}，直接返回 :>> `, cache[n])
    return cache[n]
  }

  let res = n > 1

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      res = false
      break
    }
  }

  console.log(`cache中没有${n}，存进去 :>> 是否是素数`, res)
  cache[n] = res

  return res
}

isPrime(3)
isPrime(4)
isPrime(5)
isPrime(5)
isPrime(5)

console.log('cache :>> ', cache)