// Task 1
var num = 10;
console.log(num);

//Task 2
let say = "Hello, world!";
console.log(say);

//Task 3
const result = true;
console.log(result);

//Task 4
  // Number
const num = 42;
console.log("Number:", num);

  // String
const message = "This is a string.";
console.log("String:", message);

  // Boolean
const isTrue = true;
console.log("Boolean:", isTrue);

  // Object
const person = {
  name: "Anshika",
  age: 30,
};
console.log("Object:", person);

  // Array
const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

//Task 5
let count = 56;
console.log("Initial value:", count);

count = 45;
console.log("New value:", count);

//Task 6
const age = 30;
age = 35; // Will cause an error
console.log(age);

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// Number
const numType = 42;
console.log("Number:", num, typeof num);

// String
const stringType = "This is a string.";
console.log("String:", message, typeof message);

// Boolean
const boolType = true;
console.log("Boolean:", isTrue, typeof isTrue);

// Object
const objectType = {
  name: "Alice",
  age: 30,
  city: "New York"
};
console.log("Object:", person, typeof person);

// Array
const arrayType = [1, 2, 3, 4, 5];
console.log("Array:", numbers, typeof numbers);

// Undefined
let undefinedVar;
console.log("Undefined:", undefinedVar, typeof undefinedVar);

// Null
const nullVar = null;
console.log("Null:", nullVar, typeof nullVar);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

// Using let

let nameVar = "OCD";
console.log("Initial value (let):", nameVar);

nameVar = "Bob";
console.log("Reassigned value (let):", nameVar);

// Using const (attempt to reassign)

const num = 30;
console.log("Initial value (const):", num);

// This line will cause an error
// num = 35;

console.log("New value (const):", age); // This line might not be reached