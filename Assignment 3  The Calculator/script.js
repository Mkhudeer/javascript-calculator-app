let screen = document.getElementById("screen");
let expression = "";

function addValue(value) {
  if (screen.innerText === "0") {
    screen.innerText = value;
    expression = value;
  } else {
    screen.innerText += value;
    expression += value;
  }
}

function calculate() {
  try {
    let result = eval(expression);
    screen.innerText = result;
    expression = result.toString();
  } catch (error) {
    screen.innerText = "Error";
    expression = "";
  }
}

function clearScreen() {
  screen.innerText = "0";
  expression = "";
}
