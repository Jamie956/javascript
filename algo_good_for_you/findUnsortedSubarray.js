/*
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation:
[6, 4, 8, 10, 9]

foreach nums
  if nums[i] > nums[i+1], left edge find min, right edge find max
if r>l, length = r - l +1  
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let size = nums.length;
  let leftEdgeMinNum = nums[size - 1];
  let rightEdgeMaxNum = nums[0];
  let l = 0;
  let r = 0;

  for (let i = 0; i < size; i++) {
    (nums[size - 1 - i] > leftEdgeMinNum) ? (l = size - 1 - i) : (leftEdgeMinNum = nums[size - 1 - i]);
    (rightEdgeMaxNum > nums[i]) ? (r = i) : (rightEdgeMaxNum = nums[i]);
  }

  return l < r ? r - l + 1 : 0;
};


let nums;
nums = [2, 6, 4, 8, 10, 9, 15];//5
// nums = [1,3,2,2,2];//4
// nums = [1,2,3,3,3];//0

let res = findUnsortedSubarray(nums);
console.log(res);