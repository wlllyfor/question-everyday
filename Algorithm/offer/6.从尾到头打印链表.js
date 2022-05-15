function reversePrint (head) {
  let res = []
  while(head) {
    res.unshift(head.val)
    head = head.next
  }
  return res
}