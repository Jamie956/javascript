/*
Given an array of size n, 
find the majority element. 
The majority element is the element 
that appears more than ⌊ n/2 ⌋ times.


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
foreach nums, current num compare to every num
  if num == compare element, count++
  if count > n/2, return this num
*/
var majorityElement1 = function(nums) {
  let majorityCount = nums.length/2;
  for(num of nums){
    let count = 0;
    for(compare of nums){
      if(num == compare){
        count++;
      }
    }
    if(count > majorityCount){
      return num;
    }
  }
};

let ans;
ans = majorityElement1([2,2,1,1,1,2,2]);
// console.log(ans);


/*
new hashMap
num->key, count->value

defined maxCountNum, maxCount

foreach nums
  current num is key, that value count++
  if count > maxCount && count > n/2
    maxCount = count
    maxCountNum = num
return maxCountNum
*/
var majorityElement2 = function(nums) {
  let maxCountNum = 0;
  let maxCount = 0;
  let json = {};
  for(let num of nums){
    if(!json[num]){
      json[num] = 0;
    }
    json[num] = json[num] + 1;
    if(json[num]>maxCount && json[num]>(nums.length/2)){
      maxCount = json[num];
      maxCountNum = num;
    }
  }
  return maxCountNum;
}

ans = majorityElement2([2,2,1,1,1,2,2]);
// console.log(ans);

/*
[7,7,7,7,x,y,z]
4x7
4>n/2
4-3>0

defined candidate=nums[0], count=1
foreach nums, from index=1
  if count==0, reset candidate
  count += current num == candidate ? 1 : -1;
return candidate
*/
var majorityElement3 = function(nums) {
  let candidate = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if(count == 0){
      candidate = nums[i];
    }
    count += (nums[i] == candidate) ? 1 : -1;
  }
  return candidate;
}

ans = majorityElement3([2,2,1,1,1,2,2]);
console.log(ans);


