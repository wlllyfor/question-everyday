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

function reverseList (head) {
  let pre = null

  // 临时链表。
  let tmp = deepClone(head)
  while(tmp) {
    let next = tmp.next
    tmp.next = pre
    pre = tmp
    tmp = next
  }
  return pre
}

const head = createListNode([1,2,3,4,5])

reverseList(head)

printListNode(head)

function createListNode (arr) {
  const dummy = {
    next: null
  }

  let tmp = dummy
  for (let i = 0; i < arr.length; i++) {
    tmp.next = {
      val: arr[i],
      next: null
    }
    tmp = tmp.next
  }
  return dummy.next
}

function deepClone (target) {
  if (target === null) return target
  if (typeof target !== 'object') { 
    return target
  }
  const cloneTarget = {} 
  for (const key in target) { 
    cloneTarget[key] = deepClone(target[key]) 
  }
  return cloneTarget 
}