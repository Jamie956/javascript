/*
perseudocode

params deadend, target
return step

int openLock(deadend, target) {
  definded set store deadends and visited
  if(target is null, target length <= 0, set contain '0000') => -1
  step = 0
  queue = new queue
  queue.enqueue('0000')
  while(queue not empty){
    get queue size
    whiile size-- > 0{
      dequeue first element
      if(element == target) => step
      if(set not contain element){
        element is visited and store to set
        base on this element, make one step, get next step list
          for 0000, it next step possibilty 1000, 9000, 0100, 0900...
          for i<element.length
            clone element
            _element[i] + 1
            _element enqueue
            _element[i] - 1
            _element enqueue
        enqueue next step list to queue
      }
    }
    step++
  }
}
*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
let openLock = function(deadends, target) {
  let _deadends = new Set(deadends);
  let visited = new Set();
  let step = 0;
  let queue = ['0000'];

  if((target == null) || (target.length == 0) || _deadends.has('0000')){
    return -1;
  }

  while(queue.length > 0){
    let size = queue.length;
    while(size-- > 0){
      let firstElement = queue.shift();
      if(firstElement == target){
        return step;
      }
      if(!_deadends.has(firstElement) && !visited.has(firstElement)){
        visited.add(firstElement);
        for(let i=0; i<firstElement.length; i++){
          let newArr = firstElement.split('');
          let strNum = newArr[i];
          newArr[i] = (Number(strNum) + 11) % 10;
          queue.push(newArr.join(''));
          newArr[i] = (Number(strNum) + 9) % 10;
          queue.push(newArr.join(''));
        }
      }
    }
    step++;
  }
  return -1;
};

let deadends = ["0201","0101","0102","1212","2002"];
let target = "0202";

let rs = openLock(deadends, target);
console.log(rs);
