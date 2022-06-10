function myGet(object, path, defaultValue) {

  let newPath
  if (Array.isArray(path)) {
    newPath = path
  } else {
    newPath = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  }

  let res = object
  for (const p of newPath) {
    res = (res || {})[p]
  }
  return res || defaultValue
}

const obj = {}

console.log(_.get(obj, 'a.b')) // 输出 undefined