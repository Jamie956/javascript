//冒泡排序，O(n^2)
function test02() {
  var array = [4, 3, 1, 5, 2];
  //给指定索引的两个元素互换位置
  function swap(index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }

  function bubbleSort() {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  }

  bubbleSort();
  console.log(array);
}

//内循环改进的冒泡排序，O(n^2)
function test03() {
  var array = [4, 3, 1, 5, 2];
  function swap(index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }

  function modifiedBubbleSort() {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  }

  modifiedBubbleSort();
  console.log(array);
}

//选择排序，找最小值放在第一位，再从剩下的元素找最小值放第二位，如此类推,O(n^2)
function test04() {
  var array = [4, 3, 1, 5, 2];
  function swap(index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }

  function selectionSort() {
    var length = array.length;
    var indexMin;
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
  }

  selectionSort();
  console.log(array);
}

//插入排序
function test05() {
  var array = [4, 3, 1, 5, 2];
  function insertionSort() {
    var length = array.length;
    var j;
    var temp;
    for (var i = 1; i < length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  }

  insertionSort();
  console.log(array);
}

//归并排序，是一种分治算法，O(nlog n )
//将原始数组切分成较小的数组,直到每个小数组只有一个位置,接着将小数组归并成较大的数组,直到最后只有一个排序完毕的大数组
function test06() {
  var array = [4, 3, 1, 5, 2];

  function mergeSort() {
    array = mergeSortRec(array);
  }
  var mergeSortRec = function(array) {
    var length = array.length;
    if (length === 1) {
      return array;
    }
    var mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
  };
  var merge = function(left, right) {
    var result = [],
      il = 0,
      ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    while (il < left.length) {
      result.push(left[il++]);
    }
    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result;
  };

  mergeSort();
  console.log(array);
}

//快速排序
function test07() {
  var array = [4, 3, 1, 5, 2];

  function quickSort() {
    quick(array, 0, array.length - 1);
  }
  function quick(array, left, right) {
    var index;
    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
  }
  function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swapQuickStort(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  function swapQuickStort(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }

  quickSort();
  console.log(array);
}

test04();
