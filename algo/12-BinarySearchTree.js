//二叉树
function BinarySearchTree() {
  //节点
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;

  // 向树中插入一个新的键
  this.insert = function(key) {
    var newNode = new Node(key);
    //情况一,创建根节点
    if (root === null) {
      root = newNode;
    } else {
      //情况二,存在根节点
      insertNode(root, newNode);
    }
  };

  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      //情况一,新节点的key小于指定节点,指定节点的左节点为空
      if (node.left === null) {
        node.left = newNode;
      } else {
        //情况二,新节点的key小于指定节点,指定节点的左节点不为空,继续递归寻找下一个节点
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        //情况三,新节点的key大于指定节点,指定节点的右节点为空
        node.right = newNode;
      } else {
        //情况四,新节点的key大于指定节点,指定节点的右节点不为空,继续递归寻找下一个节点
        insertNode(node.right, newNode);
      }
    }
  };

  //从根节点开始搜索,判断是否存在指定的key
  this.search = function(key) {
    return searchNode(root, key);
  };

  var searchNode = function(node, key) {
    //情况一,当前节点为空,key不存在
    if (node === null) {
      return false;
    }
    //情况二,指定的key小于当前节点的key,用左节点继续递归寻找
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      //情况三,指定的key大于当前节点的key,用右节点继续递归寻找
      return searchNode(node.right, key);
    } else {
      //情况四,指定的key等于当前节点的key,指定的key存在
      return true;
    }
  };

  // 中序遍历
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };
  var inOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  // 先序遍历
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  };
  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  // 后序遍历
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };
  var postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  // 最小值
  this.min = function() {
    return minNode(root);
  };
  var minNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  // 最大值
  this.max = function() {
    return maxNode(root);
  };
  var maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  // remove(key) :从树中移除某个键。
  this.remove = function(key) {
    root = removeNode(root, key); //{1}
  };
  var removeNode = function(node, key) {
    if (node === null) {
      //{2}
      return null;
    }
    if (key < node.key) {
      //{3}
      node.left = removeNode(node.left, key); //{4}
      return node; //{5}
    } else if (key > node.key) {
      //{6}
      node.right = removeNode(node.right, key); //{7}
      return node; //{8}
    } else {
      //键等于node.key
      //第一种情况——一个叶节点
      if (node.left === null && node.right === null) {
        //{9}
        node = null; //{10}
        return node; //{11}
      }
      //第二种情况——一个只有一个子节点的节点
      if (node.left === null) {
        //{12}
        node = node.right; //{13}
        return node; //{14}
      } else if (node.right === null) {
        //{15}
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

function printNode(value) {
  //{6}
  console.log(value);
}
tree.inOrderTraverse(printNode); //{7}
