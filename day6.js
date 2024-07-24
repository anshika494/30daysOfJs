// Activity 1 : Array creation and access

// Task 1
const arr = [1, 2, 3, 4, 5];
console.log(arr);   // output: [ 1, 2, 3, 4, 5 ]

// Task 2
const firstElement = arr[0];
const lastElement = arr[arr.length - 1];

console.log('First Element:', firstElement); // output : First Element: 1
console.log('Last Element:', lastElement);  // output : Last Element: 5


// Activity 2 :  Array methods (basic)

// Task 3
const arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1);   // output :  [ 1, 2, 3, 4, 5, 6 ]

// Task 4
arr1.pop();
console.log(arr1);   // output :  [ 1, 2, 3, 4, 5 ]

// Task 5
arr1.shift();
console.log(arr1);  // output : [ 2, 3, 4, 5 ]

// Task 6
arr1.unshift(1);
console.log(arr1);  // output : [ 1, 2, 3, 4, 5 ]


// Activity 3 : Array methods (intermediate)

// Task 7
const arr2 = [1, 2, 3, 4, 5];
const doubledNum = arr2.map(number => number * 2);

console.log(doubledNum);    // output : [ 2, 4, 6, 8, 10 ]

// Task 8
const arr3 = [7, 2, 6, 4, 5];
const evenNum = arr3.filter(number => number % 2 === 0);

console.log(evenNum);   // output : [ 2, 6, 4 ]

// Task 9
const arr4 = [2, 9, 6, 1, 5];
function sum(num1, num2) {
    return num1 + num2;
}
const result = arr4.reduce(sum);
console.log(result);    // output : 23


// Activity 4 : Array Iteration

// Task 10
const arr5 = [4, 2, 1, 7, 5];

for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);       // output : 4 2 1 7 5
}  

// Task 11
function printArr(element) {
    console.log(element);
}
arr5.forEach(printArr);   // output : 4 2 1 7 5


// Activity 5 : Multi-dimensional arrays

// Task 12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
// output : [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Task 13
console.log(matrix[0][2]);   // output : 3