/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  let ans = nums[0];
  // let ans = nums[0].toString(2);
  for (let i = 1; i < nums.length; i++) {
    ans ^= nums[i];
    // ans = ans ^ nums[i].toString(2);
  }
  return ans;
};

let res = singleNumber([4, 1, 2, 1, 2]);
console.log(res);
/*
0^0=0
1^1=0
1^0=1
0^1=1

100 ^ 001 = 101
101 ^ 010 = 111
111 ^ 001 = 110
110 ^ 010 = 100

4 ^ 1 ^ 2 ^ 1 ^ 2 = 4
100 ^ 001 ^ 010 ^ 001 ^ 010 = 100
*/