// function only running once

// Simple

function makeRunOnce() {
  let counter = 0;

  return function () {
    if (counter > 0) {
      return;
    } else {
      counter++;
      console.log("Ran once");
    }
  };
}

const runOnce = makeRunOnce();

runOnce(); // Ran once
runOnce(); // nothing

// Generic (Complex)
// Once Polyfill

function once(func, context) {
  let ran;

  return function (...args) {
    if (func) {
      ran = func.call(context || this, ...args);
      func = null;
    }

    return ran;
  };

  // with apply
  return function () {
    if (func) {
      ran = func.call(context || this, arguments); // arguments will be an array
      func = null;
    }

    return ran;
  };
}

const hello = (name) => console.log("Hello", name);

const runOnceHello = once(hello);
runOnceHello("Paritosh"); // Hello Paritosh
runOnceHello(); // nothing
