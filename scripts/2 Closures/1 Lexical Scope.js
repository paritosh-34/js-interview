// Lexical Scope

// A scope refers to the current context of your code. It can be either globally or locally defined
// With es6 version of JS, we now also have block scope

var username = "Paritosh Batish";

// global scope
function local() {
  // local scope
  var username2 = "Paritosh B";
  console.log(username);

  // The variable defined outside of this function can be accessible inside of this function. This is called lexical scope.
}

console.log(username2); // Reference error
// cannot access from inner scope

//
// eg. of closure -

// the usage of counter in scope 2 is closure
function incrementCounter() {
  // inner scope 1
  let counter = 1;

  function increment() {
    // inner scope 2
    console.log(counter++);
  }
  return increment;
}
var myFunc = incrementCounter();
myFunc();
myFunc(); // In js this works and logs "1", "2" due to closure

// In JS whenever we create a new function, it binds itself to its environment or its lexical scope.
// The function will always have access to its lexical scope
