// Activity 1 : Basic Event Handling

// Task 1
let button = document.getElementById('Button');
let para = document.getElementById('change');

button.addEventListener('click', () => {
    para.textContent = 'Changes - This is day 10 of 30 days of JS!';
});

// Task 2
let image = document.getElementById('myImage');

image.addEventListener('dblclick', () => {
    if (image.style.visibility == 'hidden') {
        image.style.visibility = 'visible';
    } else {
        image.style.visibility = 'hidden';
    }
});

// Actitvty 2 : Mouse Events

// Task 3
let element = document.getElementById('change');

element.addEventListener('mouseover', () => {
    element.style.backgroundColor = 'lightblue';
});

// Task 4
element.addEventListener('mouseout', () => {
    element.style.backgroundColor = 'white';
});

// Activity 3 : Keyboard events

// Task 5
document.getElementById('input').addEventListener('keydown', (event) => {
    console.log(event.key);
});

// Task 6
document.getElementById('input').addEventListener("keyup", function() {
    document.getElementById('display').textContent = document.getElementById('input').value;
});

// Activity 4 : Form Events

// Task 7
let form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let formData = new FormData(form);

    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});

// Task 8
const selectDropdown = document.getElementById('selectValue');
const display = document.getElementById('displayPara');

selectDropdown.addEventListener('change', () => {
    const selectedValue = selectDropdown.value;
    display.textContent = `Selected value: ${selectedValue}`;
});

// Activity 5 : Event  Delegation

// Task 9
const list = document.getElementById('topics');

list.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

// Task 10
const elements = document.getElementById('elements');
const addItem = document.getElementById('addItem');
const item = document.getElementById('item');

elements.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

addItem.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${item.children.length + 1}`;

    item.appendChild(newItem);
});