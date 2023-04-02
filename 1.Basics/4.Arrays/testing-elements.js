const numbers = [1, 2, 3, -1];

// if there is a negative number return false
console.log(
    numbers.every(number =>
        number > 0)
); // false

console.log(numbers.some(number =>
    number < 0)
); // true