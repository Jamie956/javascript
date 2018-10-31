function test01() {
  var anotherModule = (function() {
    var privateName = "Tom";
    return {
      getName: function() {
        return privateName;
      }
    };
  })();
  var module1 = (function(mod) {
    return {
      anotherName: mod.getName
    };
  })(anotherModule);
  console.log(module1.anotherName());
}

test01();
