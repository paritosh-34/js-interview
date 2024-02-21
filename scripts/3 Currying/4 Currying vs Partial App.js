// Currying vs Partial Application

// We notice that the no. of nested functions in a curried function is equal to the no. of arguments.

// Partial application is a function that takes a function and some arguments and returns a function that takes the remaining arguments.
// Or it transforms a function into another function with small arity.
// (arity is the number of arguments a function takes)

//
// Currying
function sum1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//
// Partial Application
function sum2(a) {
  return function (b, c) {
    return a + b + c;
  };
}
