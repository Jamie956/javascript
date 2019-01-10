function test01() {
  new Promise((resolve, reject) => {
    resolve(42);
    // reject(new Error("Something Wrong"));
  })
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
}

function test02() {
  Promise.resolve(42).then(res => {
    console.log(res);
  });
}

function test03() {
  Promise.reject(new Error("Something Wrong")).catch(e => {
    console.log(e);
  });
}

//调用链传递返回值
function test04() {
  Promise.resolve(1)
    .then(val => {
      return val * 2;
    })
    .then(val => {
      return val * 2;
    })
    .then(val => {
      console.log(val);
    });
}

//promise all,多个resolve 的值返回一个数组
function test05() {
  function getData(URL) {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve(URL);
      } else {
        reject(new Error("Something Wrong"));
      }
    });
  }
  Promise.all([getData("baidu.com"), getData("google.com")])
    .then(val => console.log(val))
    .catch(e => console.log(e));
}

//promise all
function test06() {
  function timerPromisefy(delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    });
  }
  var startDate = Date.now();
  // 异步,所有promise变为resolve后程序退出
  Promise.all([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
  ]).then(res => {
    console.log(Date.now() - startDate + "ms");
    console.log(res);
  });
}

//promise race
function test7() {
  function timerPromisefy(delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(delay);
      }, delay);
    });
  }
  // 任何一个promise变为resolve或reject 的话程序就停止运行
  Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
  ]).then(value => console.log(value));
}

test06();
