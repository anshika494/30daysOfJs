// Activity 1  : Template Literals

// Task 1
const name = 'xyz';
const days = 30;

const message = `Hello ${name} , welcome to ${days} days of JS.`;
console.log(message);   // output : Hello xyz , welcome to 30 days of JS.

// Task 2
const multiLineString = `This is a multi-line string
using template literals.
This is day 8 of 30 days of JS.`;

console.log(multiLineString);
// output :
// This is a multi-line string
// using template literals.
// This is day 8 of 30 days of JS.


// Activity 2 : Destructuring

// Task 3
const num = [10, 20, 30, 40, 50];
const [first, second] = num;

console.log('First element:', first);   // output : First element: 10
console.log('Second element:', second); // output : Second element: 20

// Task 4
const book = {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1960,
};
const { title, author } = book;
  
console.log('Title:', title);   // output : Title: Pride and Prejudice
console.log('Author:', author); // output : Author: Jane Austen


// Activity 3  : Spread and Rest Operators

// Task 5
const arr = [1, 2, 3, 4];
const addElements = ['hello', 'world'];
const newArray = [...arr, ...addElements];

console.log(newArray);  // output : [ 1, 2, 3, 4, 'hello', 'world' ]

// Task 6
function sumNum(...args) {
    let sum = 0;
    for ( const arg of args){
        sum += arg;
    }
    return sum;
} 
const result = sumNum(1, 2, 3, 4, 5);
console.log(result);    // Output: 15


// Activity 4 : Default Parameters

// Task 7
function multiply(a, b = 1) {
    return a * b;
}
  
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(5));   // Output: 5


// Activity 5 : Enhanced Object Literals

// Task 8
const title1 = 'Pride and Prejudice';
const author1 = 'Jane Austen';
const yearPublished = 1925;

const book1 = {
  title,
  author,
  yearPublished,
  getSummary() {
    return `${this.title} is a novel written by ${this.author} and was published in ${this.yearPublished}.`;
  }
};

console.log(book1.getSummary());    // output : Pride and Prejudice is a novel written by Jane Austen and was published in 1925.

// Task 9
const name1 = 'firstName';
const name2 = 'lastName';
const name3 = 'age';

const person = {
  [name1]: 'Jane',
  [name2]: 'Austen',
  [name3]: 25,
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  }
};

// console.log(person);
person.greet(); // output: Hello, my name is Jane Austen and I am 25 years old.