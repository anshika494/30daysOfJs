// Activity 1 : Selecting and Manipulating Elements

// Task 1
document.getElementById('content').innerText = 'New Content';

// Task 2
const elements = document.getElementsByClassName('highlight');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.background = 'yellow';
}

// Activity 2 : Creating and Appending Elements

// Task 3
let newDiv = document.createElement('div');
newDiv.innerText = 'This is a new div element';
document.body.append(newDiv);

// Task 4
let ul = document.createElement('li');
ul.innerText = 'Day 9 : DOM Manipulation';
let li = document.getElementById('topics');
li.append(ul);

// Activity 3 : Removing Elements

// Task 5
let el = document.getElementById('removeElement');
el.remove();

// Task 6
ul.removeChild(ul.lastChild);

// Activity 4 : Modiyfing Attributes and Classes

// Task 7
const img = document.getElementById('myImage');
img.setAttribute('src', 'new-image.jpg');

// Task 8
elements[0].classList.add("div2");
elements[0].classList.remove("div");

// Activity 5 : Event Handling

// Task 9
let para = document.getElementById('para');
let changeText = document.getElementById('changeTextBtn');
function change() {
    para.innerText = 'This is day 9 of 30 days of JS.';
}
changeText.addEventListener('click', change);

// Task 10
let borderChange = document.getElementById('hover');
borderChange.addEventListener("mouseover",()=>{
    borderChange.style.borderColor="blue";
});