/*
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

/*
double pointer from start to end
copy nums1
nums1 copy pointer p1
nums2 pointer p2
nums1 pointer p
while(p1<m && p2<n), break when one of nums no new element
  compare num1_copy[p1] and num2[p2], 
  smallest one into nums1
handle remain element
if(p1<m), nums1_copy remain element copy to num1
if(p2<n)
*/

/*
double pointer from end to start
num1 ending pointer p1
num2 ending pointer p2
pointer p, index of the last store element
while(p1>=0 && p2>=0), break when one of nums no new element
  compare num1[p1] and num2[p2], the largest store at nums1
nums2 remain element copy to nums1  
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m-1;
  let p2 = n-1;
  let p = m+n-1;
  while(p1>=0 && p2>=0){
    if(nums1[p1] > nums2[p2]){
      nums1[p] = nums1[p1];
      p--;
      p1--;
    }else{
      nums1[p] = nums2[p2];
      p--;
      p2--;        
    }
  }
  while(p2>=0){
    nums1[p2] = nums2[p2];
    p2--;
  }
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

// let nums1 = [0];
// let m = 0;
// let nums2 = [1];
// let n = 1;

merge(nums1, m, nums2, n);

console.log(nums1);