// --- Greeting Functions ---
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome aboard.`);
}

function farewellUser(name) {
  console.log(`Goodbye, ${name}. See you soon!`);
}

// --- Basic Math Calculations ---
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// --- Array Manipulation ---
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squareArray(arr) {
  return arr.map(num => num * num);
}

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// --- Even/Odd Check ---
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

// --- Sample Execution ---
greetUser("Joshua");

console.log("Addition:", add(5, 3));
console.log("Multiplication:", multiply(4, 7));
console.log("Square of array:", squareArray(numbers));
console.log("Even numbers:", filterEvenNumbers(numbers));
console.log("Odd numbers:", filterOddNumbers(numbers));
co
