function timer(content, time) {
  console.log("start " + content);
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(content + " resolve");
      resolve(content);
    }, time);
  });
}

function t1() {
  console.log("start");
  var a = timer("a", 2000);
  console.log(a);
  /*
  start
  start a
  Promise { <pending> }
  a resolve
  */
}

// only async
async function t2() {
  console.log("start");
  var a = timer("a", 2000);
  console.log(a);
  /*
  start
  start a
  Promise { <pending> }
  a resolve
  */
}

// async & await function
async function t3() {
  console.log("start");
  var a = await timer("a", 1000);
  var b = await timer("b", 2000);
  console.log(a);
  console.log(b);
  /*
  start
  start a
  a resolve
  start b
  b resolve
  a
  b
  */
}

// async & await value
async function t4() {
  console.log("start");
  var a = timer("a", 2000);
  var b = timer("b", 1000);
  console.log(await a);
  console.log(await b);
  /*
  start
  start a
  start b
  b resolve
  a resolve
  a
  b
  */
}

t4();
