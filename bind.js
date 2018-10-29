function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const user = {
  name: "Tyler",
  age: 27
};

const newFn = greet.bind(user);
newFn();
