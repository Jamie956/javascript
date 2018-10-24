function test08() {
  var json = { name: "tom", age: 18 };
  //获取
  json.name;
  json["name"];
}

function test09() {
  //json -> str
  var rs = JSON.stringify({ name: "tom", age: 18 });
  console.log(rs);
  //str -> json
  rs = JSON.parse('{ "name": "tom", "age": 18 }');
  console.log(rs);
}

function test10() {
  var json = { name: "tom", age: 18 };
  //添加
  json["sex"] = "man";
  //更新
  json["age"] = 19;
}

function test11() {
  var json = { name: "tom", age: 18 };
  //删除
  delete json["age"];
}

//遍历json，把json的key赋值给定义变量key
function test12() {
  var json = { name: "tom", age: 18 };

  for (key in json) {
    console.log("k: " + key, "v: " + json[key]);
  }
}

//把json的key存入数组a
function test13() {
  var json = { name: "tom", age: 18 };
  var a = [],
    i = 0;
  for (a[i++] in json);
  console.log(a);
}