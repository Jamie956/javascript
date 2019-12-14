/*
perseudocode

params deadend, target
return deep

int openLock(deadend, target) {
  definded set store deadends and visited
  if(target is null, target length <= 0, set contain '0000') => -1
  deep = 0
  queue = new queue
  queue.enqueue('0000')
  while(queue not empty){
    foreach queue{
      dequeue first element
      if(element == target) => deep
      if(set not contain element){
        element is visited and store to set
        base on this element, make one step, get next step list
          for 0000, it next step possibilty 1000, 9000, 0100, 0900...
        and enqueue next step list 
      }
    }
    deep++
  }
}
*/