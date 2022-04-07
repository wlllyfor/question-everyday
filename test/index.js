class ZCache {
  constructor(capacity, expiresTime) {
    this.cache = new Map()
    this.max = capacity || 10
    this.expiresTime = expiresTime || 3000
    this.createTime = Date.now()
  }

  /**
   * 获取方法
   * 
   * 如果缓存里有这个元素，就把这个元素移到最新的位置，返回这个元素
   * 移动操作是先删除，再在最新的位置添加
   * 缓存里找不到就返回 -1
   */
  get (key) {
    this.expiresAndClearAll()
    if (this.cache.has(key)) {
      const val = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, val)
      return val
    }
    return -1
  }

  /**
   * 添加方法
   * 
   * 如果缓存里有要添加的元素，就把这个元素移到最新的位置，同 get 方法
   * 如果缓存里没有要添加的元素，就把这个元素添加到最新的位置
   * 如果缓存超过最大容量，就先删除最老的元素，再把要添加的元素添加到最新的位置
   */
  add (key, val) {
    this.expiresAndClearAll()
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.max) {
      const oldestEleKey = this.cache.keys().next().value
      this.cache.delete(oldestEleKey)
    }
    this.cache.set(key, val)
  }

  /**
   * 过期清空方法
   * 
   * 如果超过 expiresTime，就清空 cache
   */
  expiresAndClearAll () {
    if (Date.now() - this.expiresTime > this.createTime) {
      this.cache = new Map()
    }
  }
}


const list =  new ZCache(3)

list.add('a', 'a')

setTimeout(() => {
  console.log(list.get('a'))
  console.log(list.cache.keys())
}, 2000)
