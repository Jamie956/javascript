/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/*
rule01, case numrows=0, return [[0]]
rule02, row=1, the row unique element is 1, [[1], [], [], ...]
rule03, each row is array, [[], [], []]
rule04, case numrows>1, first and last element is 1 in every row, 
  other element value equal to top left plus top right in previou row
*/

/*
define rows [row1, row2, row3, ...]
if numrows 0, return []
rows[0][0]=1
numRows, length of rows
foreach rows index from 1, length < numRows
  get previous row
  new current row
  rows[index]row[first]=1, row first element is 1
  foreach row index from 1, length < rows index
    current rows index equal current row length -1
    row push value, top left + top right
  rows[index]row[last]=1
  push current row to rows
return rows
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let rows = [];
  if(numRows == 0){
    return [];
  }
  rows.push([1]);
  for (let i = 1; i < numRows; i++) {
    let previousRow = rows[i-1];
    let newRow = [];
    newRow.push(1);
    for (let j = 1; j < i; j++) {
      newRow.push(previousRow[j-1] + previousRow[j]);
    }
    newRow.push(1);
    rows.push(newRow);
  }
  return rows;
};

let ans = generate(5);
console.log(ans);