function exist (board, word) {

  if (board.length === 0 ) {
    return false
  }

  if (word.length === 0) {
    return true
  }

  let row = board.length
  let col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const res = find(i, j, 0)
      if (res) {
        return true
      }
    }
  }
  return false

  function find (i, j, curIndex) {
    if (i >= row || i < 0 || j >= col || j < 0) {
      return false
    }
  
    let letter = board[i][j]
  
    if (letter !== word[curIndex]) {
      return false
    }
  
    if (curIndex === word.length - 1) {
      return true
    }
  
    board[i][j] = null // 标记，已经找过的字母置为 null
    const res = find(i + 1, j, curIndex + 1)
             || find(i - 1, j, curIndex + 1)
             || find(i, j + 1, curIndex + 1)
             || find(i, j - 1, curIndex + 1)
    board[i][j] = letter
  
    return res
  }
}