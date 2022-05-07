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

function replaceSpace (s) {
  return encodeURIComponent(decodeURIComponent(s))
}

/**
 * 遍历
 */
function replaceSpace(s) {
  let res = ''
  for (let char of s) {
    if (char === ' ') {
      res += '%20'
    } else {
      res += char
    }
  }
  return res
}

function replaceSpace (s) {
  s = s.split("");
  let oldLen = s.length;
  let spaceCount = 0;
  for (let i = 0; i < oldLen; i++) {
      if (s[i] === ' ') spaceCount++;
  }
  s.length += spaceCount * 2;
  for (let i = oldLen - 1, j = s.length - 1; i >= 0; i--, j--) {
      if (s[i] !== ' ') s[j] = s[i];
      else {
          s[j - 2] = '%';
          s[j - 1] = '2';
          s[j] = '0';
          j -= 2;
      }
  }
  return s.join('');
};

function replaceSpace (s) {

  // 字符串转数组
  const arr = s.split('')

  // 统计空格数量
  let count = 0
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      count++
    }
  }

  // left 指针指向原来的末尾，right 指针指向新的长度的末尾
  let left = arr.length - 1
  let right = arr.length + count * 2 - 1

  while(left < right) {
    if (arr[left] === ' ') {
      arr[right--] = '0'
      arr[right--] = '2'
      arr[right--] = '%'
      left--
    } else {
      arr[right--] = arr[left--]
    }
  }

  // 数组转字符串
  return arr.join('')
}