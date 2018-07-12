// 2.线性探查
this.put = function (key, value) {
    var position = loseloseHashCode(key); // {1}
    if (table[position] == undefined) { // {2}
        table[position] = new ValuePair(key, value); // {3}
    } else {
        var index = ++position; // {4}
        while (table[index] != undefined) { // {5}
            index++; // {6}
        }
        table[index] = new ValuePair(key, value); // {7}
    }
};

this.get = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) { //{8}
        if (table[position].key === key) { //{9}
            return table[position].value; //{10}
        } else {
            var index = ++position;
            while (table[index] === undefined
                || table[index].key !== key) { //{11}
                index++;
            }
            if (table[index].key === key) { //{12}
                return table[index].value; //{13}
            }
        }
    }
    return undefined; //{14}
};


