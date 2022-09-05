function swapPairs (node1) {
  if (!node1 || !node1.next) {
    return node1
  }
  const node2 = node1.next
  node1.next = swapPairs(node2.next)
  node2.next = node1
  return node2
}


/**
 *           
 * node1 -> node2 -> ...
 *                
 * 
 */