function selectionSort(arr) {
  console.time("选择排序耗时");
  var len = arr.length,
    minIndex,
    i,
    j;
  function swap(a, b) {
    var aux = arr[a];
    arr[a] = arr[b];
    arr[b] = aux;
  }
  for (i = 0; i < len - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(i, minIndex);
    }
  }
  console.timeEnd("选择排序耗时");
  return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
