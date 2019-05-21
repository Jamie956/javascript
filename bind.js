const user = { name: "tom" };

function greet() {
  console.log(this.name);
}

// greet.this -> user
const greetting = greet.bind(user);
greetting();
