// Params vs Arguments

function multiply(num1, num2) {
  // Parameters
  console.log(num1 * num2);
}

multiply(5, 6); // Arguments

// Spread Operator
var arr = [5, 6];
multiply(...arr); // spread operator

function multiply2(...nums) {
  console.log(nums[0] * nums[1]);
}

// questions

// const fn = (a, ...numbers, x, y) => { ... }
// the above function will throw an error saying Rest parameter must be last formal parameter
