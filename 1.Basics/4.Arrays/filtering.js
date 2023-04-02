const numbers = [1,2,-1,6,-77];
const filtered = numbers.filter(number => number >= 0);
console.log(filtered);

const persons = [
    {name: 'John', age: 34},
    {name: 'Qusai', age: 21},
    {name: 'sara', age: 16}
];
const plus18 = persons.filter(persons => persons.age > 18);
console.log(plus18);