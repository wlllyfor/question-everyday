/**
 * 
 * @param {*} initMoney 初始化金额
 * @param {*} initSave 每年存入的金额
 * @param {*} n 存多少年
 * @param {*} age 年龄
 * @param {*} ratio 税率
 * @returns 收入汇总表格
 */
function getIncome (initMoney = 0, initSave, n, age = 26, ratio = 0.05) {

  const dp = new Array(n).fill(0).map(item => {
    return [age, initSave, 0, initMoney + initSave]
  })
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + 1
    if (i % 5 === 0) {
      dp[i][1] = dp[i - 1][1] + 1
    } else {
      dp[i][1] = dp[i - 1][1]
    }
    // dp[i][1] = dp[i - 1][1] + 1
    // dp[i][1] = dp[i - 1][1]
    dp[i][2] = dp[i - 1][3] * ratio
    dp[i][3] = dp[i][1] + dp[i][2]  + dp[i - 1][3]
  }
  return dp
}


const res = getIncome(0, 5, 25, 26)
console.table(res)


