//链表
function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
  };
  var length = 0;
  var head = null;

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
  //末尾插入元素
  this.append = function(element) {
    var node = new Node(element);
    var current;
    if (head === null) {
      //链表首位加入节点
      head = node;
    } else {
      current = head;
      //遍历链表,直到找到最后一项
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
      var node = new Node(element);
      var current = head;
      var previous;
      var index = 0;

      if (position === 0) {
        //在首部插入元素
        node.next = current;
        head = node;
      } else {
        //遍历索引，直到找到指定的位置
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
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
      //移除首部
      if (position === 0) {
        head = current.next;
      } else {
        //移除指定位置
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来
        previous.next = current.next; // {9}
      }
      length--; //更新链表长度
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
  //打印链表
  this.print = function() {
    console.log(this.toString());
  };
}

var list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.insert(2, "x");

list.removeAt(3);
list.remove("x");

list.print();
