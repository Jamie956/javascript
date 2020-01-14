/*
The Hamming distance between two integers is
the number of positions at which the corresponding bits are different.

异或运算：相同的为0，不同的为1
将两个数做异或运算，然后计算1的个数

#example 1
1, 4 => 2
0001
0100
0001 ^0100 = 0101

#example 2
0, 4 => 1
0000
0100
0000 ^0100 = 0100

#example 3
5, 13 => 1
0101
1101
0101 ^1101 = 1000

#example 4
3, 6 => 2
0011
0110
0011 ^0110 = 0101

*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y;
  let count = 0;
  while (n != 0) {
    count++;
    n = n & (n - 1);
  }
  return count;
};

let ans = hammingDistance(1, 4);
console.log(ans);

//n & n-1
// 0 & 0 = 0, 1 & 0 = 0, 0 & 1 = 0, 1 & 1 = 1
//n is end with 1
//0101, 0100 => 0100
//0011, 0010 => 0010
//n is end with 0
//0100, 0011 => 0000
//0010, 0001 => 0000
//1110, 1101 => 1100

