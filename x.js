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
