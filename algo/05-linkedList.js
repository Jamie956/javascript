//链表
function LinkedList() {
  //节点
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
    //情况一,链表为空
    if (head === null) {
      head = node; //链表首位加入节点
    } else {
      //情况二,链表不为空
      current = head;
      //从头部遍历链表,直到找到最后一项
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

      //情况一,在链表头部插入元素
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        //情况二,遍历链表索引，直到找到指定的位置
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
    if (position >= 0 && position < length) {
      var current = head,
        previous,
        index = 0;

      //情况一,移除链表头部
      if (position === 0) {
        head = current.next;
      } else {
        //移除链表指定位置的元素
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来
        previous.next = current.next;
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
  //根据元素的值,移除某个元素
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
