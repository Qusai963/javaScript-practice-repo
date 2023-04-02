const courses = [
    {id: 0, name: 'a'},
    {id: 1, name: 'b'}
];

// I wanna find the index of the 'course.name: b' using arrow function

let course = courses.findIndex((course) =>{
return course.name === 'b';
});
console.log(course);

// because we have one parameter in the function we can remove ()
 course = courses.findIndex(course => course.name === 'b');
 console.log(course);
 
 const isOdd = (target, numbers) => {
    // bla bla bla bla bla bla bla bla bla
    if(target % 2 === 1) return true;
    return numbers;
 };
 console.log(isOdd(5, [1,2,3,6]));