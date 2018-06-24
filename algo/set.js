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
    //并集，包含A, B两个集合
    this.union = function (otherSet) {
        var unionSet = new Set(); //{1}
        var values = this.values(); //{2}
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values(); //{3}
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    //交集，A, B共同的部分
    this.intersection = function (otherSet) {
        var intersectionSet = new Set(); //{1}
        var values = this.values();
        for (var i = 0; i < values.length; i++) { //{2}
            if (otherSet.has(values[i])) {
                //{3}
                intersectionSet.add(values[i]); //{4}
            }
        }
        return intersectionSet;
    }
    //差集，A有，B没有
    this.difference = function (otherSet) {
        var differenceSet = new Set(); //{1}
        var values = this.values();
        for (var i = 0; i < values.length; i++) { //{2}
            if (!otherSet.has(values[i])) {
                //{3}
                differenceSet.add(values[i]); //{4}
            }
        }
        return differenceSet;
    };
    //子集，B包含A
    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) { //{1}
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) { //{2}
                if (!otherSet.has(values[i])) { //{3}
                    return false; //{4}
                }
            }
            return true; //{5}
        }
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


//测试并集
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);
console.log(unionAB.values());//[ '1', '2', '3', '4', '5', '6' ]

//测试交集
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
var intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());//[ '2', '3' ]

//差集
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3); 4
var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4); 5
var differenceAB = setA.difference(setB);
console.log(differenceAB.values());//[ '1' ]

//子集
var setA = new Set();
setA.add(1);
setA.add(2);
var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.subset(setB));//true
console.log(setA.subset(setC));//false