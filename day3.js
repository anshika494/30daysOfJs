//Activity 1 : If-else statements

//Task 1 : Number Check Script
let num = 34;
if(num == 0) {
    console.log("Number is 0");
} else if(num>0) {
    console.log(`${num} is positive`);       //output: 34 is positive
} else {
    console.log(`${num} is negative`);
}

//Task 2 : Voting Eligibility Script
let age = 17;
if(age >= 18){
    console.log("Eligible to vote");
} else{
    console.log("Not eligible to vote");        //output: Not eligible to vote
}

// Activity 2: Nested if-else Statements

//Task 3
let num1 = 0;
let num2 = -1;
let num3 = 5;
if(num1 >= num2){
    if(num1 >= num3){
        console.log(`${num1} is greatest`);
    } else{
        console.log(`${num3} is greatest`);    //output: 5 is greatest
    }
} else{
    if(num2 >= num3){
        console.log(`${num2} is greatest`);
    }else{
        console.log(`${num3} is greatest`);
    }
}

// Activity 3: Switch case

//Task 4 : Day of the week Script
let dayNumber = 6;
let day;
switch (dayNumber) {
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
        day = "Sunday";
}
console.log(`Day ${dayNumber} is ${day}`); //output: Day 6 is Saturday

//Task 5 : Grade assignment Script
let score = 76;
switch (true) {
    case score >= 90:
      console.log("Grade = A");
      break;
    case score >= 80:
      console.log("Grade = B");   //output: Grade = B
      break;
    case score >= 70:
      console.log("Grade = C");
      break;
    case score >= 60:
      console.log("Grade = D");
      break;
    default:
      console.log("Grade = F");
}

//Activity 4: Ternary operator

// Task 6
let number = 3;
const isOdd = number % 2 === 1 ? "odd" : "even";
console.log(`The number ${number} is ${isOdd}.`); //output : The number 3 is odd

//Activity 5: Combining Conditions

//Task 7 : Leap Year Script
let year = 2024;
if((year % 400 == 0)||(year % 4 == 0 && year % 100 != 0)){
    console.log(`${year} is leap year`);
} else{
    console.log(`${year} is not leap year`);   //output 2024 is leap year
}