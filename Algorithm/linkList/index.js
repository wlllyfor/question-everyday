function printListNode (node) {
  let str = ''
  helper(node)
  console.log(str)
  function helper(node) {
    if (!node) {
      str += 'null'
      return
    }
    if (node.val) {
      str += `${node.val} -> `
    }
    helper(node.next)
  }
}

function removeElements (head, val) {
  let tmp = head
  while(tmp && tmp.next) {
    if (tmp.next.val === val) {
      tmp.next = tmp.next.next
    } else {
      tmp = tmp.next
    }
  }
  return head
}