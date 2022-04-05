const arr = [...document.getElementsByTagName("*")].map(tag=>tag.tagName)
const obj = arr.reduce((pre, i)=>{
  pre[i] = (pre[i] || 0) + 1;
  return pre;
}, {})

const countArr = Object.keys(obj).sort((a,b) => obj[b] - obj[a])
const res = {}
countArr.slice(0,3).forEach(v => {
  res[v] = obj[v]
})
console.log(res)