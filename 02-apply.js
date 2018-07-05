
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}
	function Student(name, age, grade) {
		Person.apply(this, arguments);//劫持另外一个对象的方法，继承另外一个对象的属性
		// Person.call(this, name, age);

		this.grade = grade;
	}

	var student = new Student("jamie", 18, "one");

	console.log(student)
