function test01() {
  function bubbleSort(arr) {
    console.time("Spend");
    var len = arr.length,
      i,
      j;
    function swap(a, b) {
      var aux = arr[a];
      arr[a] = arr[b];
      arr[b] = aux;
    }

    for (i = 0; i < len; i++) {
      for (j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
    console.timeEnd("Spend");
    return arr;
  }
  var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  console.log(bubbleSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
}

function test02() {
  function bubbleSort(arr) {
    console.time("Spend");
    function swap(a, b) {
      var aux = arr[a];
      arr[a] = arr[b];
      arr[b] = aux;
    }

    var i = arr.length - 1;
    while (i > 0) {
      var pos = 0;
      for (var j = 0; j < i; j++)
        if (arr[j] > arr[j + 1]) {
          pos = j;
          swap(j, j + 1);
        }
      i = pos;
    }
    console.timeEnd("Spend");
    return arr;
  }
  var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
  console.log(bubbleSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
}

test02();
