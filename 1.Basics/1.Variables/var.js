
function exampleFunction() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable as above, because it is function-scoped
        console.log(x); // Output: 2
    }
    console.log(x); // Output: 2
}