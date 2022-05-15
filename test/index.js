// 创建一个 1 -> 2 -> 3 -> null 的链表。
let node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}

function fn(node) {
  let tmp = node

  // 遍历链表
  while (tmp && tmp.next) {
    if (tmp.val === 1) {
      res = tmp.next
    }
    tmp = tmp.next
  }
  return node
}


// 遍历完之后，打印当前节点
printListNode(fn(node)) // 1 -> 3 -> null

// printListNode()

function printListNode (node) {
  let str = ''
  while(node && node.val) {
    str += `${node.val} -> `
    node = node.next
  }
  console.log(str + 'null')
}

// function printListNode (node) {
//   let str = ''
//   travel(node)
//   console.log(str)
//   function travel(node) {
//     if (!node) {
//       str += 'null'
//       return
//     }
//     if (node.val) {
//       str += `${node.val} -> `
//     }
//     travel(node.next)
//   }
// }