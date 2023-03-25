let num1 = '';
let num2 = '';
let operator = '';
let result = '';

function addNumber(number) {
  if (!operator) {
    num1 += number;
    document.getElementById('result').value = num1;
  } else {
    num2 += number;
    document.getElementById('result').value = num2;
  }
}

function setOperator(op) {
  operator = op;
}

function calculate() {
  if (operator === '+') {
    result = Number(num1) + Number(num2);
  } else if (operator === '-') {
    result = Number(num1) - Number(num2);
  } else if (operator === '*') {
    result = Number(num1) * Number(num2);
  } else if (operator === '/') {
    result = Number(num1) / Number(num2);
  }

  document.getElementById('result').value = result;
}

function clearScreen() {
  num1 = '';
  num2 = '';
  operator = '';
  result = '';
  document.getElementById('result').value = '';
}
