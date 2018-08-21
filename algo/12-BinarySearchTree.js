//二叉树
function BinarySearchTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;
  // 向树中插入一个新的键
  this.insert = function (key) {
    var newNode = new Node(key); //{1}
    if (root === null) { //{2}
      root = newNode;
    } else {
      insertNode(root, newNode); //{3}
    }
  };
  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) { //{4}
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode); //{7}
      }
    } else {
      if (node.right === null) { //{8}
        node.right = newNode; //{9}
      } else {
        insertNode(node.right, newNode); //{10}
      }
    }
  };
  // search(key) :在树中查找一个键,如果节点存在,则返回 true ;如果不存在,则返回 false
  this.search = function (key) {
    return searchNode(root, key); //{1}
  };
  var searchNode = function (node, key) {
    if (node === null) { //{2}
      return false;
    }
    if (key < node.key) { //{3}
      return searchNode(node.left, key); //{4}
    } else if (key > node.key) { //{5}
      return searchNode(node.right, key); //{6}
    } else {
      return true; //{7}
    }
  };
  // 中序遍历
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback);
  };
  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };
  // 先序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  };
  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  // 后序遍历
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  };
  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };
  // 最小值
  this.min = function () {
    return minNode(root);
  };
  var minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };
  // 最大值
  this.max = function () {
    return maxNode(root);
  };
  var maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };
  // remove(key) :从树中移除某个键。
  this.remove = function (key) {
    root = removeNode(root, key); //{1}
  };
  var removeNode = function (node, key) {
    if (node === null) { //{2}
      return null;
    }
    if (key < node.key) { //{3}
      node.left = removeNode(node.left, key); //{4}
      return node; //{5}
    } else if (key > node.key) { //{6}
      node.right = removeNode(node.right, key); //{7}
      return node; //{8}
    } else { //键等于node.key
      //第一种情况——一个叶节点
      if (node.left === null && node.right === null) { //{9}
        node = null; //{10}
        return node; //{11}
      }
      //第二种情况——一个只有一个子节点的节点
      if (node.left === null) { //{12}
        node = node.right; //{13}
        return node; //{14}
      } else if (node.right === null) { //{15}
        node = node.left; //{16}
        return node; //{17}
      }
      //第三种情况——一个有两个子节点的节点
      var aux = findMinNode(node.right); //{18}
      node.key = aux.key; //{19}
      node.right = removeNode(node.right, aux.key); //{20}
      return node; //{21}
    }
  };
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

function printNode(value) { //{6}
  console.log(value);
}
tree.inOrderTraverse(printNode); //{7}