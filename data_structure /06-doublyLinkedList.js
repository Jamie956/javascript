//双向链表
function DoublyLinkedList() {
  var Node = function(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  };
  var length = 0;
  var head = null;
  var tail = null;

  //链表转字符串
  this.toString = function() {
    var current = head;
    var items = [];
    while (current) {
      items.push(current.element);
      current = current.next;
    }
    return items;
  };
  //打印链表
  this.print = function() {
    console.log(this.toString());
  };
  //末尾插入元素
  this.append = function(element) {
    var node = new Node(element);
    var current;

    //情况一,链表为空,头部插入节点
    if (head === null) {
      head = node;
    } else {
      //情况二,链表不为空,遍历链表,直到找到最后一项
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node; //找到最后一项,与node建立链接
    }
    length++; //更新链表的长度
  };
  //指定位置插入元素
  this.insert = function(position, element) {
    //检查是否越界
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        //情况一,头部位置插入元素,链表没有头部
        if (!head) {
          head = node;
          tail = node;
        } else {
          //情况二,头部位置插入元素,链表有头部
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        //情况三,尾部位置插入元素
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        //情况三,头部与尾部之间插入元素,遍历链表索引
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++; //更新链表长度
      return true;
    } else {
      return false; //越界
    }
  };
  //移除指定位置的元素
  this.removeAt = function(position) {
    //检查是否越界
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      if (position === 0) {
        //给新头部建立链接
        head = current.next;
        //情况一,移除头部位置元素,总共只有一个元素
        if (length === 1) {
          tail = null;
        } else {
          //情况二,移除头部位置元素,总共有多个元素
          head.prev = null;
        }
      } else if (position === length - 1) {
        //情况三,移除尾部位置元素
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        //情况四,头部与尾部之间移除元素,遍历链表索引
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return null; //越界
    }
  };
  //获取元素的索引
  this.indexOf = function(element) {
    var current = head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };
  //移除某个元素
  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  //链表是否为空
  this.isEmpty = function() {
    return length === 0;
  };
  //链表大小
  this.size = function() {
    return length;
  };
  //获取头部
  this.getHead = function() {
    return head;
  };
}

var list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.insert(2, "x");

list.removeAt(1);

list.remove("x");

list.print();
