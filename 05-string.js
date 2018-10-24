
//长度
str.length;
//根据索引获取字符
str.charAt(0);
//对指定位置的字符编码
str.charCodeAt(1);
//字符编码转成字符
String.fromCharCode(101);
//连接字符
str.concat(' plus!');
//判断字符串是否以给定字符结尾
str.endsWith('world');
//判断字符串是否包含给定的字符
str.includes('wo');
//获取给定字符的索引
str.indexOf("d");
//获取给定字符最后的索引
str.lastIndexOf("o");
//输出重复字符串
str.repeat(3);
//替换字符串中指定字符
str.replace("world", "google");
//字符串中搜索指定字符
str.search("wo");
//裁剪字符串
str.slice(1, 3);
//以指定字符分割，把字符串转成数组
str.split(" ");
//判断字符串是否以给定的字符开头
str.startsWith("hello");
//裁剪字符串
str.substr(1, 3);
//裁剪字符串
str.substring(1, 3);
//字符串转小写
str.toLowerCase();
//字符串转大写
str.toUpperCase();
//去除字符串的空格
str.trim();