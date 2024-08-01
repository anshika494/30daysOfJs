// Activity 1: Understanding Promises

// Task 1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});

promise1.then((message) => {
    console.log(message);   // output : Success
});

// Task 2
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Failed."));
    }, 2000);
});

promise2.catch((error) => {
    console.error(error.message);   // output : Failed.
});

// Activity 2: Changing Promises

// Task 3
promise1
    .then((message) => {
        console.log(message);
        return promise2;
    })
    .catch((error) => {
        console.error(error.message);
    });
// output : 
// Success
// Failed.

// Activity 3: Using Async/Await

// Task 4
function api1() {
    return promise1;
}

async function func1() {
        const output = await api();
        console.log(output);
}
func1();
//output: Success

// Task 5
function api2(){
    return promise2;
}
async function rejectedPromise(){
    try{
        await api2();
    }
    catch(error){
        console.log(error);
    }
}
rejectedPromise();
// output : Error: Failed.

// Activity 4 : Fetching data from API

// Task 6
let apiUrl = "https://random-d.uk/api";
const fetchData = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                reject(new Error(`Error: ${response.status} - Resource not found`));
            } else{
                response.json().then(data => resolve(data));
            }
        })
        .catch(error => reject(error));
    });
};
fetchData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// Task 7
const fetchData2 = async()=>{
    try{
        let response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`Error: ${response.status} - Resource not found`);
        }
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};
fetchData2()

// Activity 5  : Concurrent Promises

// Task 8
function api3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success promise 3");
        },5000)
    });
}
const p1 = api1();
const p2 = api2();
Promise.all([p1,p2]).then((messages)=>{
    console.log(messages);
});
// output: [ 'Success', 'Success promise 3' ]

// Task 9
Promise.race([p1,p2]).then((messages)=>{
    console.log(messages);
});
//output : Success