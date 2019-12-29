/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Input: 3
Output: [1,3,3,1]
*/

/*
1,2,1

0,1,2,1
0+1,1+2,2+1,1

1,3,3,1
*/

/*
define row [1]
foreach index i, from 1, length < rowIndex
  row[0] insert 0
  foreach index j, from 0, length < i
    row[j] = row[j] + row[j+1]
return row
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let row = [1];
  for (let i = 1; i < rowIndex+1; i++) {
    row.unshift(0);
    for (let j = 0; j < i; j++) {
      row[j] = row[j] + row[j+1];
    }
  }
  return row;
};

let ans = getRow(4);
console.log(ans);