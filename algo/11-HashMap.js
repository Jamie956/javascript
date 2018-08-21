// 2.线性探查
this.put = function(key, value) {
  //获取key的hash
  var position = loseloseHashCode(key);
  //如果hash对应的位置为空,那就把键值对加进去
  if (table[position] == undefined) {
    table[position] = new ValuePair(key, value);
  } else {
    //如果hash对应的位置不为空,那就把索引加1,直到找到索引对应位置为空的索引
    var index = ++position;
    while (table[index] != undefined) {
      index++;
    }
    table[index] = new ValuePair(key, value);
  }
};

this.get = function(key) {
  var position = loseloseHashCode(key);
  if (table[position] !== undefined) {
    if (table[position].key === key) {
      return table[position].value;
    } else {
      var index = ++position;
      while (table[index] === undefined || table[index].key !== key) {
        index++;
      }
      if (table[index].key === key) {
        return table[index].value;
      }
    }
  }
  return undefined;
};
