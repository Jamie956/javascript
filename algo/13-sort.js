//排序算法
function ArrayList() {
  var array = [];
  //添加元素
  this.insert = function (item) {
    array.push(item);
  };
  this.toString = function () {
    return array.join();
  };
  //交换
  var swap = function (index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };
  //冒泡排序，O(n^2)
  this.bubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };
  //内循环改进的冒泡排序，O(n^2)
  this.modifiedBubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) { //{1}
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };
  //选择排序，找最小值放在第一位，再找第二最小值放第二位，O(n^2)
  this.selectionSort = function () {
    var length = array.length,
      indexMin;
    for (var i = 0; i < length - 1; i++) {
      indexMin = i;
      for (var j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };
  // 插入排序
  this.insertionSort = function () {
    var length = array.length,
      j, temp;
    for (var i = 1; i < length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) { //{5}
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };
  //归并排序，是一种分治算法，O(nlog n )
  //将原始数组切分成较小的数组,直到每个小数组只有一个位置,接着将小数组归并成较大的数组,直到最后只有一个排序完毕的大数组
  this.mergeSort = function () {
    array = mergeSortRec(array);
  };
  var mergeSortRec = function (array) {
    var length = array.length;
    if (length === 1) {
      return array;
    }
    var mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length); //{5}
    return merge(mergeSortRec(left), mergeSortRec(right)); //{6}
  };
  var merge = function (left, right) {
    var result = [], // {7}
      il = 0,
      ir = 0;
    while (il < left.length && ir < right.length) { // {8}
      if (left[il] < right[ir]) {
        result.push(left[il++]); // {9}
      } else {
        result.push(right[ir++]); // {10}
      }
    }
    while (il < left.length) {
      result.push(left[il++]);
    }
    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result; // {13}
  };
  //快速排序
  this.quickSort = function () {
    quick(array, 0, array.length - 1);
  };
  var quick = function (array, left, right) {
    var index; //{1}
    if (array.length > 1) { //{2}
      index = partition(array, left, right); //{3}
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) { //{6}
        quick(array, index, right);
      }
    }
  };
  var partition = function (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)], //{8}
      i = left,
      j = right;
    while (i <= j) {
      while (array[i] < pivot) { //{12}
        i++;
      }
      while (array[j] > pivot) { //{13}
        j--;
      }
      if (i <= j) { //{14}
        swapQuickStort(array, i, j); //{15}
        i++;
        j--;
      }
    }
    return i; //{16}
  };
  var swapQuickStort = function (array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };
}

//生成测试数组
function createNonSortedArray(size) { //{6}
  var array = new ArrayList();
  for (var i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}
//测试冒泡排序
var array = createNonSortedArray(5);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());

//测试改进冒泡排序
array = createNonSortedArray(5);
console.log(array.toString());
array.modifiedBubbleSort();
console.log(array.toString());

//测试选择排序
array = createNonSortedArray(5);
console.log(array.toString());
array.selectionSort();
console.log(array.toString());

//测试插入排序
array = createNonSortedArray(5);
console.log(array.toString());
array.insertionSort();
console.log(array.toString());