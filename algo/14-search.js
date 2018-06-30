//搜索算法

//顺序搜索
this.sequentialSearch = function (item) {
  for (var i = 0; i < array.length; i++) { //{1}
    if (item === array[i])
      return i;
  }
  return -1; //{4}
}

//二分搜索
this.binarySearch = function (item) {
  this.quickSort(); //{1}
  var low = 0,
    //{2}
    high = array.length - 1, //{3}
    mid, element;
  while (low <= high) { //{4}
    mid = Math.floor((low + high) / 2); //{5}
    element = array[mid];
    //{6}
    if (element < item) {
      //{7}
      low = mid + 1;
      //{8}
    } else if (element > item) {
      //{9}
      high = mid - 1;
      //{10}
    } else {
      return mid;
      //{11}
    }
  }
  return -1; //{12}
};