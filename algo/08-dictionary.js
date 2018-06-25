//字典，储存键值对的对象
function Dictionary() {
    // set(key, value) : 向字典中添加新元素。
    // remove(key) : 通过使用键值来从字典中移除键值对应的数据值。
    // has(key) : 如果某个键值存在于这个字典中, 则返回 true, 反之则返回 false 。
    // get(key) : 通过键值查找特定的数值并返回。
    // clear() : 将这个字典中的所有元素全部删除。
    // size() : 返回字典所包含元素的数量。与数组的 length 属性类似。
    // keys() : 将字典所包含的所有键名以数组形式返回。
    // values() : 将字典所包含的所有数值以数组形式返回。
    var items = {};
    this.has = function (key) {
        return key in items;
    }
    this.set = function (key, value) {
        items[key] = value; //{1}
    }
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };
    this.values = function () {
        var values = [];
        for (var k in items) { //{1}
            if (this.has(k)) {
                values.push(items[k]); //{2}
            }
        }
        return values;
    };
    this.getItems = function () {
        return items;
    }
    this.size = function () {
        return Object.keys(items).length; //{4}
    };
    this.keys = function () {
        return Object.keys(items);
    };
    this.clear = function () {
        items = {};
    };
}

//test
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf'));//true
console.log(dictionary.size());//3
console.log(dictionary.keys());//[ 'Gandalf', 'John', 'Tyrion' ]
console.log(dictionary.values());//[ 'gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com' ]
console.log(dictionary.get('Tyrion'));//tyrion@email.com
dictionary.remove('John');

console.log(dictionary.keys());//[ 'Gandalf', 'Tyrion' ]
console.log(dictionary.values());//[ 'gandalf@email.com', 'tyrion@email.com' ]
console.log(dictionary.getItems());//{ Gandalf: 'gandalf@email.com', Tyrion: 'tyrion@email.com' }


