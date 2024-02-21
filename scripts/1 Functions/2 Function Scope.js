var num1 = 20,
  num2 = 3,
  name = "Paritosh";

function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

function getScore() {
  var num1 = 2,
    num2 = 3;
  // local variables are taken over num1 and num2 from the global scope

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Paritosh scored 5"
