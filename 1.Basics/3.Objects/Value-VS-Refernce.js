// Reference
let obj = { value: 10 };
let array = ['red', 'green', 'blue'];

// value
let string = 'Qsuai';
let number = 10;

function test(obj, array, string, number) { 
    obj.value++;
    array.sort();
    string = 'Armoush';
    number = -10;
}

test(obj, array, string, number);

console.log(obj.value, array, string, number);