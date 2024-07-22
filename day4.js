// Activity 1  : For loop

//Task 1: Number priting
for (let i = 1; i <= 10; i++) {
    console.log(i);
}                                   // output: 1 2 3 4 5 6 7 8 9 10

//Task 2: Multiplication Table
for (let i = 1; i <= 10; i++){
    console.log(5*i);
}                                   // output: 5 10 15 20 25 30 35 40 45 50

//Activity 2 : While loop

//Task 3
i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++ ;
}
console.log(`Sum of numbers 1-10 = ${sum}`);  // output: Sum of numbers 1-10 = 55

//Task 
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}                                       //output: 10 9 8 7 6 5 4 3 2 1

// Activity 3: Do while loop

// Task 5
i = 1;
do{
    console.log(i);
    i++;
}while( i!= 6);                         // output : 1 2 3 4 5

// Task 6: Factorial Calculation
i = 5;
do{
    fact *= i;
    i--;
}while(i != 0);
console.log(`5! = ${fact}`);            // output: 5! = 120

// Activity 4: Nested loops

// Task 7: Pattern Printing
for(i = 0; i < 5; i++){
    let pattern = "";
    for(let j = 0; j <= i; j++){
        pattern = pattern + "*" + " ";
    }
    console.log(pattern);
}
// output:
// *
// * *
// * * *
// * * * * 
// * * * * *

// Activity 5: Loop control statements

// Task 8: Continue statement
for(i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    } else{ 
        console.log(i);       // output: 1 2 3 4 6 7 8 9 10
    }
}

// Task 9: Break statement
for(i = 1; i <= 10; i++){
    if(i == 7){
        break;
    } else{
        console.log(i);        // output: 1 2 3 4 5 6
    }
}