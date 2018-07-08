
Math.random()// 获取随机数 0.6010277121370049

//生成n位随机数
let getRandom = n => Math.random().toString().slice(-n);// 截取倒数n位数
getRandom(6);//生成6位随机数

//生成n-m之间的随机数
let randomNum = (n, m) => Math.floor(Math.random() * (m - n) + n);
//以值小的n为基准，加上两数差的绝对值乘以0-1之间的随机数，取值区间为[n+|n-m|*0, n+|n-m|*1]，地板取整
randomNum(2, 10)//2-10之间的整数
