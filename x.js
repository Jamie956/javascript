//限制用户连续点击
function throttle(fun) {
  if (fun.timeoutId) {
    clearTimeout(fun.timeoutId);
  }
  fun.timeoutId = setTimeout(function() {
    fun();
    fun.timeoutId = null;
  }, 1000);
}

//判断items对象是否包含value
 value in items;
 items.hasOwnProperty(value); //更好

//获取对象items的长度
 Object.keys(items).length;