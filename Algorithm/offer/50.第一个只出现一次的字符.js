// abaccdeff
// aadadaad
// leetcode
// [l]
function firstUniqChar (s) {
  let queue = []
  const map = {}
  for (let char of s) {
    const top = queue[0]
    if (top === char && char in map) {
      queue.shift()
    } else {
      queue.push(char)
      map[char] = true
    }

  }
  return queue[0] || ' '
};