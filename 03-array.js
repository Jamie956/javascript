
var arr = ['a', 'b', 'c'];

//是否是数组
Array.isArray(arr);
//末尾插入元素
arr.push('e');
//首位插入元素
arr.unshift('x');
//令数组长度为0
arr.length = 0;
//移除数组首位元素
arr.shift();
//移除数组末尾元素
arr.pop();
//指定插入位置 (位置，长度，插入的元素)
arr.splice(1, 2, "x", "y");
//倒序
arr.reverse();
//裁剪数组
arr.slice(1, 3);
//排序
arr.sort();
//以指定符号分割数组元素
arr.join(" - ");
//获取指定元素的索引
arr.indexOf("b");
//获取指定元素最后一位的索引
arr.lastIndexOf("c");
//数组转字符串
arr.toString();
//删除数组指定位置的元素，该位置会留下空字符串
delete arr[2];
//连接数组
arr1.concat(arr2);
// 遍历数组索引
for (index in arr) { }
// 遍历数组元素
for (item of items) { }