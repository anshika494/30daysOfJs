//Activity 1: Function Declaration

//Task 1
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
      console.log(num + " is even.");
    } else {
      console.log(num + " is odd.");
    }
}
  
checkEvenOrOdd(10); // output: 10 is even.
checkEvenOrOdd(7);  // output: 7 is odd.

//Task 2
function Square(number) {
    const result = number * number;
    console.log(`The square of ${number} is ${result}`);
}

Square(5); // output: The square of 5 is 25.


// Activity 2: Function Expression

//Task 3
const findMax = function(a, b) {
    let max;
    if (a > b) {
      max = a;
    } else {
      max = b;
    }
    console.log(`The maximum of ${a} and ${b} is ${max}`);
};
  
findMax(2,-1); // output: "The maximum of 2 and -1 is 2."

//Task 4
const concatStrings = function(str1, str2) {
    const result2 = str1 + str2;
    console.log("The concatenated string is: " + result2);
};

concatStrings("Hello ", "world!"); // output: "The concatenated string is: Hello world!"


// Activity 3 : Arrow Functions

// Task 5
const calculateSum = (num1, num2) => {
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
};

calculateSum(5, 1); // output: "The sum of 5 and 1 is 6."

// Task 6
const containsChar = (str, char) => str.includes(char);

console.log(containsChar("Hello world!", "z")); // output: false


// Activity 4 : Function parameters and default values

//Task 7
const multiply = (a, b = 1) => a * b;

console.log(multiply(5, 3)); // output: 15
console.log(multiply(7));    // output: 7

//Task 8
function greet(name, age = 'unknown') {
    return `Hello ${name}! You are ${age} years old.`;
}

console.log(greet('Siri'));       // output: "Hello siri! You are unknown years old."


// Activity 5 : High - order functions

//Task 9
function repeat(func, times) {
    for (let i = 0; i < times; i++) {
      func();
    }
}
function sayHello() {
    console.log("Hello!");
}
repeat(sayHello, 3); // output: Hello! Hello! Hello!

//Task 10
function composeFunctions(func1, func2, value) {
    return func2(func1(value));
} 
function double(x) {
    return x * 2;
}
function add(x) {
    return x + 1;
}
  
const result = composeFunctions(double, add, 5);
console.log(result); // output: 11