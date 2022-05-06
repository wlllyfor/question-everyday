/**
 * @param {string} s
 * @return {string}
 * 
 * 正则
 */
function replaceSpace (s) {
  return s.replace(/ /g, '%20')
}

/**
 * API
 */
function replaceSpace (s) {
  return s.replaceAll(' ', '%20')
}


/**
 * API
 */
function replaceSpace (s) {
  return s.split(' ').join('%20')
}

/**
 * 遍历
 */
function replaceSpace(s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      res += '%20'
    } else {
      res += s[i]
    } 
  }
  return res
}