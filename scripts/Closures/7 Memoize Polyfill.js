// Momoize Polyfill
// Implement Caching/Memoize function

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 10000000; i++) {}
  return num1 * num2;
};

console.time("First call");
clumsyProduct(9467, 7649); // 22.699ms
console.timeEnd("First call");

console.time("Second call");
clumsyProduct(9467, 7649); // 20.167ms
console.timeEnd("Second call");

function myMemoize(fn, context) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn.call(context || this, ...args);
    cache[key] = result;
    return result;
  };
}

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time("First call");
memoizedClumzyProduct(9467, 7649); // 12.073ms
console.timeEnd("First call");

console.time("Second call");
memoizedClumzyProduct(9467, 7649); // 0.036ms
console.timeEnd("Second call");
