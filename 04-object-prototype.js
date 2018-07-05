
function Person() { };
Person.prototype.name = 'no name';
Person.prototype.age = 0;
Person.prototype.city = 'no city';
Person.prototype.print = function () { };

var p = new Person();
p.name = 'tom';
p.print();

//

function Person() {
    this.name = '';
    this.age = '';
    this.set = function (person) {
        this.name = person.name;
        this.age = person.age;
    };
    this.get = function () {
        return { name: this.name, age: this.age }
    };

};

var p = new Person();
p.set({ name: "tom", age: 18 });
p.get()