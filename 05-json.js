//根据key获取json某个元素
json.key
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