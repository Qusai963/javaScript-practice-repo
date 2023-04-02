const fruits = ["apple", "banana", "orange", "kiwi"];

console.log(fruits[0]);
console.log(fruits[2]);

fruits[1] = "grape";
console.log(fruits);

 fruits.sort(); // Sorts the elements in the array alphabetically
 console.log(fruits);
 
  // finding elements (primitives)
 console.log(fruits.indexOf("banana"));
 console.log(fruits.lastIndexOf("banana"));
 console.log(fruits.includes("banana"));

 // finding elements (objects)
 const courses = [
    {id: 0, name: 'a'},
    {id: 1, name: 'b'}
];

 const course = courses.find(function(course){
    return course.name === 'b';
 });
 console.log(course);

 const index = courses.findIndex(function(course){
    return course.name === 'b';
 });
 console.log(index);