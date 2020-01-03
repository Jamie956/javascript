/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Input: [7,1,5,3,6,4]
Output: 5

for s1 in all status1
  for s2 in all status2
    for ...
      dp[s1][s2][...] = best choose(selet1, select2, ...)


selection: buy, sell, rest(do nothing)

dp[i][k][s]
i 天数
k 交易次数
s status, has stock=1, no stock=0

for 0 <= i < n
  for 1 <= k < K
    for s in {0,1}
      dp[i][k][s] = max(buy, sell, rest)

base case
dp[i][0][0]=0
dp[i][0][1]=null

dp[-1][k][0]=0
dp[-1][k][1]=null

formula
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]), max(rest, sell)
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]), max(rest, buy)

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length == 0){
    return 0;
  }
  //i, s
  //dp[0][1]=prices[0]
  //dp[0][0]=0
  let dp = [];
  dp[0] = [0, -prices[0]];

  for (let i = 1; i < prices.length; i++) {
    //s=0
    // dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
    //s=1
    // dp[i][1] = Math.max(dp[i-1][1], -prices[i]);

    dp[i] = [Math.max(dp[i-1][0], dp[i-1][1]+prices[i]), Math.max(dp[i-1][1], -prices[i])];
  }

  return dp[prices.length-1][0];
};

let a = maxProfit([7,1,5,3,6,4]);
console.log(a);