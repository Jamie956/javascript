/*
params: int n, sum from squre sum
return: int step, min step to make n equal to sum
int function(int n){
  new queue
  n enqueue
  step = 0
  new visited set
  while(queue not empty){
    queue size
    //handle current queue all node, for one step
    while(size-- > 0){
      dequeue num
      foreach, num-1, num-4, num-9, num-16 ...
        x = num - i*i
        if x<0 => break, 12-1, 12-4, ..., 12-16 < 0
        if x==0 => return step = step +1, is min step
        if(not visited the num)
          visited this num
          enqueue num, next step handle this num
    }
    step++, when you handle all queue node in one step, goto next step
  }
  reuturn -1
}
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let queue = [n];
  let step = 0;
  let visited = new Set();
  while(queue.length > 0){
    let size = queue.length;
    while(size-- > 0){
      let num = queue.shift();
      for(let i=1;;i++){
        let x = num - i*i;
        if(x < 0){
          break;
        }
        if(x == 0){
          return step = step + 1;
        }
        if(!visited.has(x)){
          visited.add(x);
          queue.push(x);
        }
      }
    }
    step++;
  }
  return -1;
};

let rs;
rs = numSquares(12);//3
console.log(rs);
rs = numSquares(13);//2
console.log(rs);
rs = numSquares(9);//1
console.log(rs);