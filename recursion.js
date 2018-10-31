"use strict";
//尾递归
function factorial(n) {
  console.trace(); //查看调用栈
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(3);
