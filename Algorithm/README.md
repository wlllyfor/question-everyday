## 解题方法（套路）

### 树的遍历

以二叉树的前序遍历为例

```js
function preOrder (root) {
  let res = []
  function walk(root) {
    if (!root) {
      return null
    }
    res.push(root.val)
    walk(root.left)
    walk(root.right)
  }
  walk(root)
  return res
}
```

迭代：

```js
function preOrder (root) {
  let res = []
  if (!root) {
    return res
  }
  let stack = [root]
  while(stack.length) {
    const cur = stack.pop()
    res.push(cur.val)
    cur.right && stack.push(cur.right)
    cur.left && stack.push(cur.left)
  }
  return res
}
```

- 二分查找 
- 选择排序 
- 分治法计算数组元素之和、数组长度、数组元素最大值
- 广度优先搜索算法遍历 Dom 树
- 深度优先搜索遍历 Dom 树
- [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
- js实现一个链表
- 手写深拷贝
- 实现一个函数，每执行一次，函数值 + 1
- 计算素数
- 闭包实现一个缓存模块
- 实现单例模式，普通版本和闭包版本
- 实现一个全局唯一的模态框



- [231. 2 的幂](https://leetcode-cn.com/problems/power-of-two/)
- [136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)
- 冒泡排序
- 选择排序
- 快速排序




## 数组

- [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)
- [26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
- [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)
- [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)
- [167. 两数之和 II - 输入有序数组](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)
- [977. 有序数组的平方](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)
- [209. 长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)
- [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)
- [15. 三数之和](https://leetcode-cn.com/problems/3sum/)

## 链表

- [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)
- [19. 删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
- [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
- [876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)
- [203. 移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)
- [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/submissions/)
- [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)  
- [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)
- [234. 回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)
- [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
- [92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

## 树

- [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
- [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
- [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
- [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
- [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)
- [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/) 
- [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
- [111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
- [114. 二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)
- [617. 合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)
- [236. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [543. 二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)
- [572. 另一棵树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/)
- [110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)
- [222. 完全二叉树的节点个数](https://leetcode-cn.com/problems/count-complete-tree-nodes/)
- [257. 二叉树的所有路径](https://leetcode-cn.com/problems/binary-tree-paths/)
- [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
- [107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
- [199. 二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view/)
- [637. 二叉树的层平均值](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/)
- [116. 填充每个节点的下一个右侧节点指针](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/)
- [117. 填充每个节点的下一个右侧节点指针 II](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/)
- [429. N 叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)
- [515. 在每个树行中找最大值](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/)
- [112. 路径总和](https://leetcode-cn.com/problems/path-sum/)
- [404. 左叶子之和](https://leetcode-cn.com/problems/sum-of-left-leaves/)
- [98. 验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)
- [99. 恢复二叉搜索树](https://leetcode-cn.com/problems/recover-binary-search-tree/comments/)
- [108. 将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)
- [109. 有序链表转换二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/)
- [654. 最大二叉树](https://leetcode-cn.com/problems/maximum-binary-tree/)
- [230. 二叉搜索树中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)
- [700. 二叉搜索树中的搜索](https://leetcode-cn.com/problems/search-in-a-binary-search-tree/)
- [701. 二叉搜索树中的插入操作](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)
  
## 栈和队列

- [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
- [71. 简化路径](https://leetcode-cn.com/problems/simplify-path/)
- [225. 用队列实现栈](https://leetcode-cn.com/problems/implement-stack-using-queues/)
- [232. 栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)
- [1047. 删除字符串中的所有相邻重复项](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)
- [150. 逆波兰表达式求值](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/)
- [151. 颠倒字符串中的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)

## 二分

- padStart
- [704. 二分查找](https://leetcode-cn.com/problems/binary-search/)
- 35
- 153
- 69

## 回溯和搜索

- [46. 全排列](https://leetcode-cn.com/problems/permutations/)
- [79. 单词搜索](https://leetcode-cn.com/problems/word-search/)
- 17
- 39
- 77
- 78
- 131
- 93
- 37
- 47
- 51

## 贪心

- [860. 柠檬水找零](https://leetcode-cn.com/problems/lemonade-change/)
- [55. 跳跃游戏](https://leetcode-cn.com/problems/jump-game/)
- [455. 分发饼干](https://leetcode-cn.com/problems/assign-cookies/)
- [300. 最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

## 动态规划

- [509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)
- 70
- 746
- 62
- 63
- 322
- 198
- 213
- 337
- 121
- 122
- 123
- 188
- 309
- 714
- 1143
- 115
- 392
- 53
- 583
- 674
- 72
- 416
- 518
- 64
- 174
