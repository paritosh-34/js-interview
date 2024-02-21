// Currying is a function that takes 1 argument at a time and returns a function expecting the next argument.
// It converts functions from fn(a, b) to fn(a)(b)

// Curried functions are constructed by chaining closures by immediately returning their inner functions simoultaneously.

function sum1(a, b) {
  return a + b;
}

// converted from a normal function to a curried function
function sum2(a) {
  return function (b) {
    return a + b;
  };
}
