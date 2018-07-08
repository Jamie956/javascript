//替换匹配的字符
'hello world'.replace(/h|o|d/g, '*');
'ab123c6def2gh8ijk54lmn'.replace(/\d/g, '*');// /\d/g 多个数字

//是否符合匹配
/^\w+@[a-z0-9]+\.[a-z]+$/i.test("752492509@qq.com");

//获取匹配的字符
str.match(/\d/);// 匹配第一个数字
str.match(/\d+/);// 匹配第一个连续数字
str.match(/\d+/g);// 匹配全部数字
str.match(/[abc]/g);// 匹配包含a,b,c的字符
str.match(/[a-z]/g);// 匹配a-z的字符
str.match(/[0-9]/g);// 匹配0-9的字符
str.match(/[^a-z]/g);// 不匹配a-z的字符
str.match(/[^a-z0-9]/g);// 不匹配a-z和0-9的字符

"123aaaaa".search(/a/);// 获取匹配字符的索引
