//Activity 1:Arithmetic Operations

//Task 1: Add
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log(sum); // Output: 15

//Task 2: Subtract
let S1 = 26;
let S2 = 12;
let sub = S1 - S2;
console.log(sub);  //Output: 14

//Task 3: Multiply
let M1 = 5;
let M2 = 7;
let product = M1 * M2;
console.log(product); //Output: 35

//Task 4: Divide
let D1 = 8;
let D2 = 4;
let divide = M1 / M2;
console.log(divide); //Output: 2

//Task 5: Remainder
let R1 = 10;
let R2 = 3;
let remainder = R1 % R2;
console.log(remainder); //Output: 1

//Acitvity 2 : Assignment Operators

//Task 6 : += operator
let A1 = 2;
let A2 = 5;
A1 += A2;
console.log(A1); //Output: 7

//Task 7 : -= operator
let num = 20;
num -= 5;
console.log(num); //Output: 15

//Activity 3 : Comparison Operator

//Task 8 : '>' &'<' operator
let a1 = 5;
let a2 = 10;
if (a1 > a2) {
    console.log(a1 + " is greater than " + a2);
} else if (a1 < a2) {
    console.log(a1 + " is less than " + a2);
} else {
    console.log(a1 + " is equal to " + a2);
}  // Output : 5 is less than 10

//Task 9 :'>=' &'<=' operator
let b1 = 15;
let b2 = 10;
if (b1 >= b2) {
    console.log(b1 + " is greater than or equal to " + b2);
} else {
    console.log(b1 + " is less than or equal to " + b2);   
}
//Output : 15 is greater than or equal to 10

let c1 = 10;
let c2 = 15;
if (c1 <= c2) {
    console.log(c1 + " is less than or equal to " + c2);
} else {
    console.log(c1 + " is greater than or equal to " + c2);
}
//Output : 10 is less than or equal to 1

//Task 10 :'==' & '===' operator
let d1 = 10;
let d2 = '10'

// '==' comparison
if (d1 == d2) {
    console.log(d1 + " is equal to " + d2);
    //Output : 10 is equal to 10
} else {
    console.log(d1 + " is not equal to " + d2);
}

// '===' comparison"
if (d1 === d2){
    console.log(d1 + " is equal to " + d2);
} else {
    console.log(d1 + " is not equal to " + d2);
} //Output: 10 is not equal to 10


//Acitvity 4: Logical Operator

//Task 11 : && operator
let a = 10;
let b = 20;

if (a > 5 && b < 5){
    console.log("Both conditions are true.");
} else {
    console.log("At least one of the conditions is false.");
} // Output: At least one of the condition is false.

//Task 12 : || operator
let c = 10;
let d = 20;
if (c > 15 || d < 25){
    console.log("At least one of the conditions is true.");
} else {
    console.log("Both conditions are false.");
} // Output : At least one of the conditions is true.

//Task 13 : ! operator
let e = 10;
if (!(e > 15)) {
    console.log(e + "is not greater than 15.");
} else {
    console.log(e + " is greater than 15.");
} // Output: 10 is not greater than 15.

//Activity 5 : Ternary Operator

//Task 14 : 
let number = -1;

let result = number > 0 ? 'Positive' : 'Negative';

console.log(result); // Output: Negative

//Feature Request

//1.Arithmetic Operations Script:

let number1 = 15;
let number2 = 4;

let addition = number1 + number2; //Addition
let subtraction = number1 - number2; //Subtraction
let multiplication = number1 * number2; //Multiplication
let division = number1 / number2; //Division
let remainderr = number1 % number2; //Remainder

console.log("Addition: " + number1 + " + " + number2 + " = " + addition);
//Output: Addition: 15 + 4 = 19
console.log("Subtraction: " + number1 + " - " + number2 + " = " + subtraction);
//Output: Subtraction: 15 - 4 = 11
console.log("Multiplication: " + number1 + " * " + number2 + " = " + multiplication);
//Output: Multiplication: 15 * 4 = 60
console.log("Division: " + number1 + " / " + number2 + " = " + division);
//Output: Division: 15 / 4 = 3.75 
console.log("Remainder: " + number1 + " % " + number2 + " = " + remainderr);
//Output: Remainder: 15 % 4 = 3

//2. Comparison and Logical Operations Script

let firstNum = 10;
let secondNum = 20;

// Comparison using different operators
let isGreaterThan = firstNum > secondNum;
let isLessThan = firstNum < secondNum;
let isEqualTo = firstNum == secondNum;
let isNotEqualTo = firstNum != secondNum;
let isGreaterThanOrEqualTo = firstNum >= secondNum;
let isLessThanOrEqualTo = firstNum <= secondNum;

console.log(firstNum + " > " + secondNum + " : " + isGreaterThan);
//Output : 10 > 20 : false
console.log(firstNum + " < " + secondNum + " : " + isLessThan);
//Output : 10 < 20 : true
console.log(firstNum + " == " + secondNum + " : " + isEqualTo);
//Output : 10 == 20 : false
console.log(firstNum + " != " + secondNum + " : " + isNotEqualTo);
//Output : 10 != 20 : true
console.log(firstNum + " >= " + secondNum + " : " + isGreaterThanOrEqualTo);
//Output : 10 >= 20 : false
console.log(firstNum + " <= " + secondNum + " : " + isLessThanOrEqualTo);
//Output: 10 <= 20 : true

// Combine conditions using logical operators
let condition1 = firstNum > 5;
let condition2 = secondNum < 25;

let and = condition1 && condition2;
let or = condition1 || condition2;

console.log("Condition 1 (firstNum > 5) && Condition 2 (secondNum < 25): " + and);
//Output: Condition 1 (firstNum > 5) && Condition 2 (secondNum < 25) : true
console.log("Condition 1 (firstNum > 5) || Condition 2 (secondNum < 25): " + or);
//Output: Condition 1 (firstNum > 5) || Condition 2 (secondNum < 25): true

//3.Ternary Operator script:

let value = -4;

// Use the ternary operator to check if the number is positive
let output = value > 0 ? 'Positive' : 'Negative';

console.log(`The number ${value} is ${output}.`); 
// Output: The number -4 is Negative.