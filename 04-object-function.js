function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function () {
        console.log(this.name + ', ' + this.age);
    }
}

var p = new Person('tom', '18');

p.print();