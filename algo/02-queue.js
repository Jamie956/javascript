// 队列，先进先出 FIFO, first in first out
function Queue() {
    var items = [];
    //末尾加入元素
    this.enqueue = function (element) {
        items.push(element);
    };
    //移除首位元素
    this.dequeue = function () {
        return items.shift();
    };
    //获取首位元素
    this.front = function () {
        return items[0];
    };
    //队列是否为空
    this.isEmpty = function () {
        return items.length == 0;
    };
    //清空队列
    this.clear = function () {
        items = [];
    };
    //队列元素个数
    this.size = function () {
        return items.length;
    };
    this.print = function () {
        console.log(items.toString());
    };
}

var queue = new Queue();
