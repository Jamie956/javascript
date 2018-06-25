//散列集合
//处理冲突：
// 1.分离链接 为散列表的每一个位置创建一个链表并将元素存储在里面
var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = function () {
        return '[' + this.key + ' - ' + this.value + ']';
    }
};
this.put = function (key, value) {
    var position = loseloseHashCode(key);
    if (table[position] == undefined) { //{1}
        table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value)); //{2}
};
this.get = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) { //{3}
        //遍历链表来寻找键/值
        var current = table[position].getHead(); //{4}
        while (current.next) { //{5}
            if (current.element.key === key) { //{6}
                return current.element.value; //{7}
            }
            current = current.next; //{8}
        }
        //检查元素在链表第一个或最后一个节点的情况
        if (current.element.key === key) { //{9}
            return current.element.value;
        }
    }
    return undefined; //{10}
};
this.remove = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
        var current = table[position].getHead();
        while (current.next) {
            if (current.element.key === key) { //{11}
                table[position].remove(current.element); //{12}
                if (table[position].isEmpty()) { //{13}
                    table[position] = undefined; //{14}
                }
                return true; //{15}
            }
            current = current.next;
        }
        // 检查是否为第一个或最后一个元素
        if (current.element.key === key) { //{16}
            table[position].remove(current.element);
            if (table[position].isEmpty()) {
                table[position] = undefined;
            }
            return true;
        }
    }
    return false; //{17}
};

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


