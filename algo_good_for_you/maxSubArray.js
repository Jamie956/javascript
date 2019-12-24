/*
Given an integer array nums,
find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/*
  define max_sum_before_ending, 和的最大值，其中必须包括最后一个元素
  define max, answer
  foreach nums
    max_sum_before_ending = max(num[i], max_sum_before_ending+num[i]) //sum[i] = max(a[i], sum[i-1]+a[i])
    max = max(max, max_sum_before_ending)
  return max
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(!nums.length){
    return;
  }
  let max_sum_before_ending = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max_sum_before_ending = Math.max(nums[i], max_sum_before_ending+nums[i]);
    max = Math.max(max_sum_before_ending, max);
  }
  return max;
};

let ans = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
// console.log(ans);

var maxSubArray2 = function(nums) {
  if(!nums.length){
    return;
  }
  let max_sum_before_ending = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if(max_sum_before_ending>0){
      max_sum_before_ending = max_sum_before_ending + nums[i];
    }else{
      max_sum_before_ending = nums[i];
    }
    if(max_sum_before_ending > max){
      max = max_sum_before_ending;
    }
  }
  return max;
}

let ans2 = maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]);
console.log(ans2);
