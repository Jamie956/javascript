//字典，储存键值对的对象
function Dictionary() {
  var items = {};
  //是否包含某个key
  this.has = function(key) {
    return key in items;
  };
  //打印元素
  this.print = function() {
    console.log(this.getItems());
  };

  //添加新元素
  this.set = function(key, value) {
    items[key] = value;
  };
  
  //根据key移除元素
  this.remove = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };
  //清空字典
  this.clear = function() {
    items = {};
  };

  //根据key获取元素的值
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };
  //获取全部元素的值
  this.values = function() {
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };
  //获取元素对象
  this.getItems = function() {
    return items;
  };
  //获取元素大小
  this.size = function() {
    return Object.keys(items).length;
  };
  //获取全部元素的key
  this.keys = function() {
    return Object.keys(items);
  };
}

var dictionary = new Dictionary();
dictionary.set("user", "tom");
dictionary.set("email", "tom@email.com");
dictionary.remove("email");
dictionary.size();

dictionary.print();
