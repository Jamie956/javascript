function Set() {
    var items = {};
    this.has = function (value) {
        // return value in items;
        return items.hasOwnProperty(value);//更好
    };
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value; //{1}
            return true;
        }
        return false;
    };
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]; //{2}
            return true;
        }
        return false;
    };
    this.clear = function () {
        items = {}; // {3}
    };
    this.size = function () {
        return Object.keys(items).length; //{4}
    };
    this.values = function () {
        return Object.keys(items);
    };
}

var set = new Set();
set.add(1);
console.log(set.values()); //输出["1"]
console.log(set.has(1)); //输出true
console.log(set.size()); //输出1
set.add(2);
console.log(set.values()); //输出["1", "2"]
console.log(set.has(2)); //true
console.log(set.size()); //2
set.remove(1);
console.log(set.values()); //输出["2"]
set.remove(2);
console.log(set.values()); //输出[]