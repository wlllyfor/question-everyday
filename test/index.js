var permute = function(nums) {
  const res = []
  function backTracking(path) {
    if (path.length === nums.length) {
      res.push(path)
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue
      }
      console.log('path :>> ', path);
      backTracking(path.concat(nums[i]))
    }
  }
  backTracking([])
  return res
};

console.log(permute([1,2,3]))