// Activity 1 : Object Creation and Access

// Task 1
const book = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};

console.log(book);  // output : { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }

// Task 2
console.log(book.title);    // output : Pride and Prejudice
console.log(book.author);   // output : Jane Austen


// Activity 2 : Object Methods

// Task 3
book.details = function() {
    console.log(`${this.title} by ${this.author}`);
}
book.details();  // output : Pride and Prejudice by Jane Austen

// Task 4
book.update = function(newYear){
    this.year = newYear;
}
book.update(2024);
console.log(book.year); // output : 2024
console.log(book);
/* output : {
 title: 'Pride and Prejudice',
 author: 'Jane Austen',
 year: 2024,
 details: [Function (anonymous)],
 update: [Function (anonymous)]
} */


// Activity 3: Nested Objects

// Task 5
const book1 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};

const book2 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

const library = {
    name: "Library",
    books: [book1, book2]
};
console.log(library);
/* output : {
  name: 'Library',
  books: [
    { title: 'Pride and Prejudice',
     author: 'Jane Austen',
      year: 1813 
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    }
  ]
} */

// Task 6
console.log(`Library Name: ${library.name}`);
library.books.forEach((book, index) => {
    console.log(`Book ${index + 1} Title: ${book.title}`);
});
/* output :
Library Name: Library
Book 1 Title: Pride and Prejudice
Book 2 Title: The Great Gatsby
*/


// Activity 4 : The 'this' keyword

// Task 7   
const book3 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};
book3.details = function() {
    console.log(`${this.title} ${this.year}`);
}
book3.details();  // output : Pride and Prejudice 1813


// Activity 5 : Object Iteration

// Task 8
const book4 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};
for (const property in book4) {
    console.log(`${property}: ${book4[property]}`);
}

// output : 
// title: Pride and Prejudice
// author: Jane Austen
// year: 1813

// Task 9
const keys = Object.keys(book4);
console.log("Keys:", keys);     // output : Keys: [ 'title', 'author', 'year' ]

const values = Object.values(book4);
console.log("Values:", values);     // output : Values: [ 'Pride and Prejudice', 'Jane Austen', 1813 ]