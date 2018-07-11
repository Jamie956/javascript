//优先队列
function PriorityQueue() {
    var items = [];
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
        console.log(items);
    };
    //内部函数
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    //根据优先度加入元素
    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        if (this.isEmpty()) {//数组为空时
            items.push(queueElement);//末尾加入元素
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);//插入到指定位置
                    added = true;
                    break;
                }
            }
            if (!added) {//插入元素优先度排最后
                items.push(queueElement);//末尾加入元素
            }
        }
    };
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("tom", 2);
priorityQueue.enqueue("will", 1);
priorityQueue.enqueue("miku", 3);
priorityQueue.enqueue("holi", 1);
priorityQueue.print();