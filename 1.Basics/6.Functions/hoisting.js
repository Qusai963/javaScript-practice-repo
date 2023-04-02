/*
Hoisting is a mechanism in JavaScript where variable and function declarations
are moved to the top of their respective scopes
during the compilation phase, regardless of where they are actually defined in the code.
This means that a variable or function can be used before it is declared in the code.
  */

console.log(x); // This code will output undefined instead of throwing an error,
                // because the declaration of the variable x is hoisted to the top of the scope,
                // but the initialization of its value to 5 remains in place.
var x = 5;
// note only var declarations are hoisted to the top of the scope however let, const and class declarations are not hoisted

walk(); // output: walk
function walk(){
    console.log("walk");
}

run(); // output: error
let run = function(){
    console.log("run");
};
