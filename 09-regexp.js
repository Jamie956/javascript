// 类型
// str.search(regexp);// 获取匹配字符的索引
// str.replace(regexp, 'replace');//替换匹配的字符
// regexp.test(str);//是否匹配
// str.match(regexp);//获取匹配的字符

// 特别字符,使用字符本身需要用\转义,如\$
// $ 匹配输入字符串的结尾位置
// () 标记一个子表达式的开始和结束位置
// * 前面字符出现次数大于等于0
// + 前面字符出现次数大于0
// . 匹配除换行符 \n 之外的任何单字符
// [ 标记一个中括号表达式的开始
// ^ 匹配输入字符串的开始位置
// ? 前面字符出现次数0或1
// { 标记限定符表达式的开始
// | 两项之间的一个选择

//限定符
// * 前面字符出现次数大于等于0
// + 前面字符出现次数大于0
// ? 前面字符出现次数0或1
// {n} 匹配n次
// {n,} 至少匹配n次
// {n,m} 最少匹配 n 次且最多匹配 m 次

// 各种正则表达式
var str = "<H1>Chapter 1</H1>";
// var a = str.match(/\d/);// 匹配第一个数字
// var a = str.match(/\d+/);// 匹配第一个连续数字
// var a = str.match(/\d+/g);// 匹配全部数字
// var a = str.match(/[abc]/g);// 匹配包含a,b,c的字符
// var a = str.match(/[a-z]/g);// 匹配a-z的字符
// var a = str.match(/[0-9]/g);// 匹配0-9的字符
// var a = str.match(/[^a-z]/g);// 不匹配a-z的字符
// var a = str.match(/[^a-z0-9]/g);// 不匹配a-z和0-9的字符
// var a = str.match(/b/); //匹配特定一个字符
// var a = str.match(/a|2|o/g); //匹配多个指定字符
// var a = str.match(/<.*>/);// 匹配从 < 到 > 之间的所有内容
// var a = str.match(/<.*?>/);//匹配从 < 到第一个 > 之间的所有内容
var a = str.match(/<\w+?>/);//匹配开始的 < >


console.log(a);
