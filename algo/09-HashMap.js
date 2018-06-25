//散列表
function HashTable() {
    // put(key, value) : 向散列表增加一个新的项(也能更新散列表)
    // remove(key) : 根据键值从散列表中移除值。
    // get(key) : 返回根据键值检索到的特定的值。
    var table = [];

    var loseloseHashCode = function (key) {
        var hash = 0;
        //{1}
        for (var i = 0; i < key.length; i++) { //{2}
            hash += key.charCodeAt(i);
            //{3}
        }
        return hash % 37; //{4}
    };

    this.put = function (key, value) {
        var position = loseloseHashCode(key); //{5}
        console.log(position + ' - ' + key); //{6}
        table[position] = value; //{7}
    };
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };
}

//test
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));//gandalf@email.com
console.log(hash.get('Loiane'));//undefined

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));//undefined
