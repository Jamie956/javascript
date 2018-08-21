//散列表
function HashTable() {
  var table = [];
  //将key转成hash
  var loseloseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };
  //添加或更新元素
  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    table[position] = value;
  };
  //根据key获取元素的值
  this.get = function(key) {
    return table[loseloseHashCode(key)];
  };
  //打印指定key的值
  this.print = function(key) {
    console.log(this.get(key));
  };
  //根据key移除元素
  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined;
  };
}

var hash = new HashTable();
hash.put("user", "tom");

hash.print("user");
