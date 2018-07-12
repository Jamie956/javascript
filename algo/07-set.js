//集合,不包含重复元素
function Set() {
  var items = {}; //对象
  //判断是否包含某个元素
  this.has = function(value) {
    // return value in items;
    return items.hasOwnProperty(value); //更好
  };
  //添加元素
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value; //key=value
      return true;
    }
    return false; //元素已经存在
  };
  //打印集合对象
  this.print = function() {
    console.log(this.values());
  };
  //根据移除某个元素
  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };
  //清空集合
  this.clear = function() {
    items = {};
  };
  //获取集合大小
  this.size = function() {
    return Object.keys(items).length;
  };
  //获取集合的值
  this.values = function() {
    return Object.keys(items);
  };
  //并集，包含A, B两个集合
  this.union = function(otherSet) {
    var unionSet = new Set();

    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };
  //交集，A, B共同的部分
  this.intersection = function(otherSet) {
    var intersectionSet = new Set();

    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };
  //差集，A有，B没有
  this.difference = function(otherSet) {
    var differenceSet = new Set();

    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };
  //子集，B包含A
  this.subset = function(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      var values = this.values();
      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);

set.remove(2);

set.print();
