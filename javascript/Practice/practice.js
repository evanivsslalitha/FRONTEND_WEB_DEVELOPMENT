// JavaScript Introduction

// Variables in JavaScript
// var - Function Scoped
function varExample() {
    var x = 10;
    console.log("Initial value of x:", x); // Output: 10
    if (true) {
        var x = 20; // Redeclared inside the block
        console.log("Inside block, x:", x); // Output: 20
    }
    console.log("Outside block, x:", x); // Output: 20
}
varExample();

// let - Block Scoped
function letExample() {
    let y = 30;
    console.log("Initial value of y:", y); // Output: 30
    if (true) {
        let y = 40; // New variable inside block
        console.log("Inside block, y:", y); // Output: 40
    }
    console.log("Outside block, y:", y); // Output: 30
}
letExample();

// const - Block Scoped (Cannot be reassigned)
function constExample() {
    const z = 50;
    console.log("Value of z:", z); // Output: 50
    if (true) {
        const z = 70; // New block-scoped variable
        console.log("Inside block, z:", z); // Output: 70
    }
    console.log("Outside block, z:", z); // Output: 50
}
constExample();

// Data Types
let name = "John"; // String
let age = 25; // Number
let isTrue = 10 > 20; // Boolean
let emptyValue = null; // Null
let notDefined; // Undefined
console.log(name, age, isTrue, emptyValue, notDefined);

// Array Operations
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Accessing elements
fruits.push("Mango"); // Adding element
console.log(fruits);
fruits.pop(); // Removing last element
console.log(fruits);
fruits.forEach(fruit => console.log(fruit)); // Iterating
console.log(fruits.includes("Banana")); // Finding element

// Object Operations
let person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(person.name); // Accessing properties
person.age = 26; // Modifying properties
person.country = "USA"; // Adding property
console.log(person);
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
console.log("city" in person); // Checking property existence
// Operators and Expressions

