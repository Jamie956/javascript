// *1 转化为数字
var rs;
rs = "32" * 1;
console.log(rs);

//object强制转化为string: 字符串+Object
rs = "the Math object:" + Math;
console.log(rs);

//过滤数组中的所有假值
rs = [0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34].filter(Boolean);
console.log(rs);

//双位运算符 ~~
rs = ~~4.9; //Math.floor
console.log(rs);

//短路运算符
rs = "" && "1"; //第一个false就返回第一个
console.log(rs);
rs = "" || "2"; //第一个false就返回第二个
console.log(rs);

//取整
rs = 1.3 | 0;
console.log(rs);

//& 1 是否是奇数
rs = !!(6 & 1);
console.log(rs);

//惰性载入函数
function foo() {
  if (true) {
    foo = function() {
      console.log("aaa");
    };
  } else {
    foo = function() {
      console.log("bbb");
    };
  }
  return foo();
}
foo();

//一次性函数
function sca() {
  console.log("msg");
  sca = function() {
    console.log("foo");
  };
}
sca();
sca();

//通用表单校验
const schema = {
  first: {
    required: true
  },
  last: {
    required: true
  }
};

const validate = (schema, values) => {
  for (field in schema) {
    if (schema[field].required) {
      if (!values[field]) {
        return false;
      }
    }
  }
  return true;
};
console.log(validate(schema, { first: "Bruce" })); // false
console.log(validate(schema, { first: "Bruce", last: "Wayne" })); // true
