//处理hash冲突：1.分离链接 为散列表的每一个位置创建一个链表并将元素存储在里面

//键值对实体
var ValuePair = function(key, value) {
  this.key = key;
  this.value = value;
  this.toString = function() {
    return "[" + this.key + " - " + this.value + "]";
  };
};
//增
this.put = function(key, value) {
  //获取key的hash
  var position = loseloseHashCode(key);
  //如果hash所在索引还没有定义链表,那就创建一个链表
  if (table[position] == undefined) {
    table[position] = new LinkedList();
  }
  //把元素加入hash所在索引的链表
  table[position].append(new ValuePair(key, value));
};
//key查
this.get = function(key) {
  var position = loseloseHashCode(key);
  if (table[position] !== undefined) {
    //遍历链表来寻找键/值
    var current = table[position].getHead();
    while (current.next) {
      if (current.element.key === key) {
        return current.element.value;
      }
      current = current.next;
    }
    //检查元素在链表第一个或最后一个节点的情况
    if (current.element.key === key) {
      return current.element.value;
    }
  }
  return undefined;
};
//删
this.remove = function(key) {
  var position = loseloseHashCode(key);
  if (table[position] !== undefined) {
    var current = table[position].getHead();
    while (current.next) {
      if (current.element.key === key) {
        //链表移除元素
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
      current = current.next;
    }
    // 检查是否为第一个或最后一个元素
    if (current.element.key === key) {
      table[position].remove(current.element);
      if (table[position].isEmpty()) {
        table[position] = undefined;
      }
      return true;
    }
  }
  return false;
};
