// curry() implementation
// Converts f(a, b, c) into f(a)(b)(c)

function curry(func) {
  return function curried(...args) {
    console.log("Args:", args, "length:", args.length);
    console.log("Func:", func, "length:", func.length);
    console.log("------");

    if (args.length >= func.length) {
      // once this is satisfied then it will provide all these arguemnts to the function and call it
      return func(...args);
    } else {
      return function (...nextArgs) {
        console.log("Args", args, "  Args2:", nextArgs);
        console.log("");
        return curried(...args, ...nextArgs);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);
const a = curriedSum(1);
const b = a(2);
const c = b(3);

console.log("a", a);
console.log("b", b);
console.log("c", c);
