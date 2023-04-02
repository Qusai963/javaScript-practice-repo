const person = {
    name: 'Qusai',
    age: 21,
    hello: function () {
        console.log('hello');
    }
};

console.log(person);
console.log(person.name);
console.log(person['name']);
person.hello();

person.hair = 'black';
console.log(person.hair);

delete person.hair;
delete person.hello; // not hello(); 
console.log(person);

person = {}; // error because it is constant.