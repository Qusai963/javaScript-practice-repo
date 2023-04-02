const fruits = ["apple", "banana", "orange", "kiwi"];

fruits.push("pear"); // Adds a new element to the end of the array
console.log(fruits);

fruits.pop(); // Removes the last element from the array
console.log(fruits);

fruits.unshift("watermelon"); // Adds a new element to the beginning of the array
console.log(fruits);

fruits.shift("watermelon"); // Removes the first element of the array
console.log(fruits);

fruits.splice(2, 0, "strawberry"); // Adds new element in index 2 and shift other elements to right.
console.log(fruits);

fruits.splice(2, 1); // Removes ... (look at the second parameter)
console.log(fruits);


// Emptying an Array
let numbers = [1,2,3,4];
let another = numbers;

// solution 1
numbers = [];
console.log(numbers);
console.log(another); // [1,2,3,4]

// solution 2
numbers = [1,2,3,4];
numbers.length = 0;
another = numbers;
console.log(numbers);
console.log(another); // []


// combining arrays
const first = [1,2,3];
const second = [4,5];

const combined = [...first, ...second];
// or const combined = first.concat(second);
console.log(combined);

// slicing arrays
const slice = combined.slice(1,3); // from index 1 to index 3 but without combined[3] // Output: [2, 3]
console.log(slice);