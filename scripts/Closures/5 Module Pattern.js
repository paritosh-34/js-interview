// What is Module Pattern

// Module pattern is a design pattern used to emulate the concept of classes in such a way
// that we're able to include both public/private methods and variables inside a single object,
// thus shielding particular parts from the global scope.

var Module = (function () {
  function privateMethod() {
    console.log("This is private method");
  }

  return {
    publicMethod: function () {
      console.log("This is public method");
    },
  };
})();

Module.publicMethod(); // This is public method
Module.privateMethod(); // TypeError: Module.privateMethod is not a function
