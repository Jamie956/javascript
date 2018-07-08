//example1 ==========================
console.log('example1');
var o = { x: 1, y: 2, z: 3 };
var a = [], i = 0;

for (key in o) {//遍历json，
    key//获取json的key
    o[key]//获取json的值
}


// for (a[i++] in o);
// console.log(a)
// for (i in a) console.log(i);



//example2 ==========================
// var str = "";
// console.log('example2');

// loop1:
// for (var i = 0; i < 5; i++) {
//     if (i === 1) {
//         continue loop1;
//     }
//     str = str + i;
// }

// console.log(str);
// expected output: "0234"