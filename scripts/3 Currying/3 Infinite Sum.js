// Infinite currying ->  sum(1)(2)(3)(4)(5)...(n)()

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

console.log(sum(1)(2)(3)(4)(5)()); // 15
