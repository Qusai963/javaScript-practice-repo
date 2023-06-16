// Instance members
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype members
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice", 30);

person1.sayHello(); // Outputs "Hello, my name is Alice"
