class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return this.x +' '+ this.y;
  }

}

class ColorPoint extends Point {
  //继承Point类的所有属性和方法
  constructor(x, y, color) {
    // super() 父类的构造函数，用来新建父类的this对象
    // 子类实例的构建，基于父类实例，只有super方法才能调用父类实例
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + " " + super.toString(); // 调用父类的toString()
  }
}

let cp = new ColorPoint(25, 8, 'green');

cp.toString();

console.log(cp.toString())