// Difference b/w normal and arrow functions

// 1. Syntax:-
//
function square(num) {
  return num * num;
}

const square = (num) => {
  return num * num;
};

//
// 2. implicit "return" keyword
const square = (num) => num * num;

//
// 3. Arguments
function fn() {
  console.log(arguments); // logs [1, 3, 2]
}
fn(1, 3, 2);

const fnArrow = () => {
  console.log(arguments); // Reference Error: arguments is not defined
};

//
// 4. "this" keyword
let user = {
  username: "Paritosh Batish",
  rc1: () => {
    console.log("I am " + this.username); // this points to the global object
  },
  rc2() {
    console.log("I am " + this.username); // this points to the user object
  },
};

user.rc1(); // "I am undefined"
user.rc2(); // "I am Paritosh Batish"
