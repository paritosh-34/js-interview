function find(index) {
  let a = [];

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6"); // 57ms

console.time("12");
find(12);
console.timeEnd("12"); // 64ms

// Optimizing with closures

function findOptimized() {
  let a = [];

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  // since the value is same each and every time we call this
  // anonymous function returned
  return function (index) {
    console.log(a[index]);
  };
}

const optimal = findOptimized();

console.time("6");
optimal(6);
console.timeEnd("6"); // 0.25ms

console.time("12");
optimal(12);
console.timeEnd("12"); // 0.025ms
