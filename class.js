function test01() {
  class Greeting {
    constructor(word) {
      this.word = word;
    }
    say() {
      console.log(this.word);
    }
  }
  var greet = new Greeting("hi");
  greet.say();
}

function test02() {
  class Greeting {
    constructor() {
      this.x = 1;
      // say.this -> Person.this
      this.say = this.say.bind(this);
    }
    say() {
      console.log(this.x);
    }
  }
  const greet = new Greeting();
  var say = greet.say;
  say();
}

function test03() {
  class Father {
    constructor(x) {
      this.x = x;
    }
    fatherSay() {
      console.log(this.x);
    }
  }

  class Son extends Father {
    constructor(x, y) {
      super(x);
      this.y = y;
    }
    invokeFather() {
      return this.fatherSay();
    }
    sonSay() {
      console.log(this.x + this.y);
    }
  }

  const s = new Son("1", "2");
  s.sonSay();
  s.invokeFather();
  s.fatherSay();
}

test03();
