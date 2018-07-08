//根据key获取json某个元素
json.key
json[key]
//字符串转json
JSON.parse('{ "name": "tom", "age": 18 }');
//json转字符串
JSON.stringify({ name: "tom", age: 18 });
//往json添加新元素
json['newkey'] = 'newvalue';
//更新json指定元素
json['oldkey'] = 'newvalue';
//根据key删除json里的某个元素
delete json['key']

var o = { x: 1, y: 2, z: 3 };
var a = [], i = 0;
for (key in o) {//遍历json，把json的key赋值给定义变量key
  // key//json的key
  // o[key]//json key的值
}
for (a[i++] in o);//把json的key存入数组a