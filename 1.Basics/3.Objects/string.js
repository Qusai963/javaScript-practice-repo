const myName = 'Qusai';
console.log(typeof myName); // string

const anotherName = new String('Ahmed');
console.log(typeof anotherName); // object

const paragraph = 'This is a paragraph from ' + myName;
console.log(paragraph.split(' ')); // [ 'This', 'is', 'a', 'paragraph', 'from', 'Qusai' ]