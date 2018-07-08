var str = "";

loop1:
for (var i = 0; i < 5; i++) {
    if (i === 1) {
        continue loop1;//不往下执行，进入下一个循环
    }
    str = str + i;
}
str//0234