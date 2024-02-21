/*
  evaluate("sum")(4)(2) => 6
  evaluate("subtract")(4)(2) => 2
  evaluate("multiply")(4)(2) => 8
  evaluate("divide")(4)(2) => 2
*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      if (operation === "subtract") return a - b;
      if (operation === "multiply") return a * b;
      if (operation === "divide") return a / b;

      throw "Invalid Operation";
    };
  };
}

console.log(evaluate("sum")(4)(2)); // 6

const multiplier = evaluate("multiply");
console.log(multiplier(4)(2)); // 8
console.log(multiplier(4)(3)); // 12

// So we only initialized our function only once and now we can reuse this multiplier function
