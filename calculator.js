let display = document.getElementById('display');

// Function to append numbers to the display
function appendNumber(number) {
  if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
}

// Function to append symbols (operators) to the display
function appendSymbol(symbol) {
  display.value += symbol;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last digit or symbol
function deleteDigit() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
