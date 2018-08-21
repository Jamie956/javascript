//优先队列,优先度由高到低,值由小到大
function PriorityQueue() {
  var items = [];
  //队列元素实体
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  //根据优先度加入元素
  this.enqueue = function(element, priority) {
    var qe = new QueueElement(element, priority);
    //情况一,队列为空
    if (this.isEmpty()) {
      items.push(qe); //末尾加入元素
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        //情况二,插入元素的值在队列的最大值最小值之间
        if (qe.priority < items[i].priority) {
          items.splice(i, 0, qe); //插入到指定位置
          added = true;
          break;
        }
      }
      //情况三,插入元素的值大于最大值
      if (!added) {
        //插入元素优先度排最后
        items.push(qe); //末尾加入元素
      }
    }
  };

  //移除首位元素
  this.dequeue = function() {
    return items.shift();
  };
  //清空队列
  this.clear = function() {
    items = [];
  };

  //获取首位元素
  this.front = function() {
    return items[0];
  };
  //队列是否为空
  this.isEmpty = function() {
    return items.length == 0;
  };
  //队列元素个数
  this.size = function() {
    return items.length;
  };
  this.print = function() {
    console.log(items);
  };
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("tom", 2);
priorityQueue.enqueue("will", 1);
priorityQueue.enqueue("miku", 3);
priorityQueue.enqueue("holi", 1);
priorityQueue.print();
