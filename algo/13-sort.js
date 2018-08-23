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
    //每遍历一次找出一个最小值并移到当前循环起始位置,总共遍历 (length - 1) 次即可确定顺序
    for (var i = 0; i < length - 1; i++) {
      indexMin = i;
      //从当前循环索引开始遍历
      for (var j = i; j < length; j++) {
        //如果找到一个比较小的数,把它的索引赋值给indexMin
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      //如果找到最小值,indexMin的值就会被修改,将最小值与当前循环索引的元素互换位置
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
    //从索引1开始遍历
    for (var i = 1; i < length; i++) {
      //将当前循环索引和元素的值暂存起来
      j = i;
      temp = array[i];
      //暂存索引跟前一个索引元素比较,索引必须大于0,获取前一个元素,和当前暂存的元素比较
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
    //如果数组长度等于1,直接返回数组
    if (length === 1) {
      return array;
    }
    //将数组切分成左叶和右叶
    var mid = Math.floor(length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
  };
  //合并左右叶数组
  var merge = function(left, right) {
    var result = [],
      il = 0,
      ir = 0;
    //分别从左右叶数组中取出相同或不相同位置的元素,将较小的元素加入新的数组
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    //把左叶或右叶剩下的比较大的元素加入新数组中
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

  function swapQuickStort(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }

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

  quickSort();
  console.log(array);
}

test07();
