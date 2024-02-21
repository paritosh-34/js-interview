// Functions in JS

// Q1 - What is a function declaration?
// normal funtion declaration
// (also called function definition or function statement)
function square(num) {
  return num * num;
}

// Q2 - What is a function expression?
// This is a function expresion
const square2 = function (num) {
  return num * num;
};
// The function on the right side of the assignment operator is an anonymous function.
// It can be assigned to a variable and in callbacks.

// The difference b/w the 2 is that a function expression is assigned to a variable

// ------

// Q3 - What are First Class Functions?
// In a language where functions can be treated like variables, their functions are called first class functions.
// In these cases functions can be passed into another function as an argument, returned from another function and assigned to a variable.
// Basically everything a variable can do.
function displaySquare(fn) {
  console.log("Square is : ", fn(5));
}

// Q4 - What is IIFE?
// IIFE stands for Immediately Invoked Function Expression.
displaySquare(square)(function square3(num) {
  return num * num;
})(5);

// IIFE question - what will be the output
(function (x) {
  return (function (y) {
    console.log(x); // output: 1 (it doesn't find x in its scope so it goes to the outer scope, this happens due to Closure)
  })(2);
})(1);

// Here what is a closure?
// The ability of a function to access variables and functions that are lexically out of its sccope are closures

// Closures are created whenever a new function is created, because that function has reference to its outer scope.
// (The inner function has access to the outer function's variables and parameters, even after the outer function has returned)
