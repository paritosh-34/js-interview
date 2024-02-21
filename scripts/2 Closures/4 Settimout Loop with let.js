for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// How to fix this only using var??

for (var i = 0; i < 3; i++) {
  function inner(i2) {
    setTimeout(function log() {
      console.log(i2);
    }, i2 * 1000);
  }

  inner(i);
}
