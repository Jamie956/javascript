class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

var p = new Point(2, 3);
var rs = p.toString();
console.log(rs);

