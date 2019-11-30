var removeDuplicates = function(nums) {
  let i = 0;
  while(i < nums.length-1){
    if(nums[i] == nums[i+1]){

      //way1 remove nums ele
      // for(let j = i+2; j < nums.length; j++){
      //   nums[j-1] = nums[j];
      // }
      // nums.length--;

      //way2: remove nums ele
      nums.splice(i+1, 1);
    }else{
      i++;
    }
  }
  return nums;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums);
console.log(nums);