/*
new result array
new stack
for each from end to begin
  while(stack not empty and current T[i] >= T(stack peek))
    stack pop, pop out all element that less than T[i], till find the element more than T[i]
  in this step, all element that less than T[i] was removed from stack befored find to T[i] < stack peek
  result[i] = stack empty ? 0 : peek - i
  stack push i
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let result = [];
  let stack = [];
  for (let i = T.length - 1; i >= 0; --i) {
    while(stack.length>0 && T[i]>=T[stack[stack.length-1]]){
      stack.pop();
    }
    result[i] = (stack.length == 0) ? 0 : (stack[stack.length-1] - i);
    stack.push(i);
  }
  return result;
};

let T;
T = [73, 74, 75, 71, 69, 72, 76, 73];//[1, 1, 4, 2, 1, 1, 0, 0]
T = [89,62,70,58,47,47,46,76,100,70];//[8,1,5,4,3,2,1,1,0,0]

let result = dailyTemperatures(T);
console.log(result);