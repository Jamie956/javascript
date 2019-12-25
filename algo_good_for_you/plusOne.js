/*
Given a non-empty array of digits
representing a non-negative integer,
plus one to the integer.

The digits are stored such that
the most significant digit is at the head of the list,
and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero,
except the number 0 itself.

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
*/

/*
foreach from end to begin
  digits[i]++, current digits plus one
  digits[i] = digits[i]%10, if digits[i]+1=10, digits[i]=0
  if(digits[i] != 0), => return digits
case 9999
digits length + 1
digits[length]=0
digit[0]=1
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i=digits.length-1; i >= 0; i--) {
    digits[i]++;
    digits[i] = digits[i]%10;
    if(digits[i] != 0){
      return digits;
    }
  }
  digits.length++;
  digits[digits.length-1] = 0;
  digits[0]=1;
  return digits;
};

let digits;
// digits = [1,2,3];
digits = [9,9,9];
let ans = plusOne(digits);
console.log(ans);