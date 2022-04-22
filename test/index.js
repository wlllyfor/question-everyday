const html = document.documentElement

console.log('html :>> ', html);

function getDomNodes (root) {
  let res = []
  dfs(root, res)
  return res
}

function dfs(root, arr) {
  if (!root) {
    return null
  }
  arr.push(root)
  const children = root.children
  if (children) {
    for (let child of children) {
      dfs(child, arr)
    }
  }
}

console.log(getDomNodes(html))