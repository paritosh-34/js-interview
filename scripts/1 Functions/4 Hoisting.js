// Hoisting

functionSomthing();

function functionSomthing() {
  console.log("Hello");
}
// Function can be called before because functions are hoisted completely

console.log(x); // undefined
var x = 5;
// The variable is hoisted but not the value
// So the variable is declared but not defined

//
// Hoisting Definition: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration
// of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

function functionName() {
  console.log(x);
  var x = 2;
  // Still undefined, since the variable is hoisted to the scope of this function.
  // The local variable x will shadow the global variable x and it's value is set to undefined
}
