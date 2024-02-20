for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// i -> 3
// i -> 3
// i -> 3

// Since var is function scoped, the value of i is not preserved in the setTimeout function.
// It prints 3, 3, 3 after 1 second each.
// This is because the value of i is 5 when the setTimeout function is called.

//
//
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Since let is block scoped, the value of i is preserved in the setTimeout function.
// It prints 0, 1, 2 after 1 second each.

// {
//    i -> 0
// }
// {
//    i -> 1
// }
// {
//    i -> 2
// }
