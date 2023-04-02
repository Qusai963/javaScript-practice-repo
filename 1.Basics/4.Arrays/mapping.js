const numbers = [1,2,3,4];
const items = numbers.map(number => '<li>' + number + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

const chaining = numbers
.filter(number => number > 1)
.map(number => ({value: number}));
console.log(chaining);