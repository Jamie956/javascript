/*
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

defined zeroCount
foreach nums
  if nums[i] == 0, zeroCount++
  if zeroCount>0 need to move element,
    num[i-zeroCount] = nums[i], nums[i] = 0
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] == 0){
      zeroCount++;
    }else if(zeroCount > 0){
      nums[i-zeroCount] = nums[i];
      nums[i] = 0;
    }
  }
};

let nums;
// nums = [0,1,0,3,12];
nums = [1];
// nums = [1,0];
moveZeroes(nums);
console.log(nums);