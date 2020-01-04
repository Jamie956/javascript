/*
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

foreach nums
  index = abs(nums[i])-1, 已经存在的数字，找出对应索引做标记，即数字绝对值-1
  if(nums[index]>0), nums[index] *= -1, 做标记
foreach nums
  if(nums[i]>0), arr.push(i+1)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) -1;
    if(nums[index] >0){
      nums[index] *= -1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] >0){
      res.push(i+1);
    }
  }
  return res;
};

let res = findDisappearedNumbers([4,3,2,7,8,2,3,1]);
console.log(res);