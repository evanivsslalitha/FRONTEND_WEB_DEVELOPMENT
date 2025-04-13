// Define a generic Stack class
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    // Push an item onto the stack
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // Pop an item from the stack
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // Peek the top item of the stack
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    // Check if the stack is empty
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    // Display all items in the stack
    Stack.prototype.display = function () {
        console.log(this.items);
    };
    return Stack;
}());
// 1. Stack of numbers
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
numberStack.push(40);
numberStack.push(50);
numberStack.push(60);
console.log("Number Stack:");
numberStack.display();
console.log("Peek:", numberStack.peek()); // Should return 60
console.log("Pop:", numberStack.pop()); // Should return 60
numberStack.display();
// 2. Stack of strings
var stringStack = new Stack();
stringStack.push("strawberry");
stringStack.push("apple");
stringStack.push("banana");
stringStack.push("cherry");
stringStack.push("guava");
stringStack.push("pear");
console.log("\nString Stack:");
stringStack.display();
console.log("Peek:", stringStack.peek()); // Should return "pear"
console.log("Pop:", stringStack.pop()); // Should return "pear"
stringStack.display();
var personStack = new Stack();
personStack.push({ name: "Lalitha", age: 25 });
personStack.push({ name: "Trishh", age: 30 });
personStack.push({ name: "Chinnu", age: 35 });
personStack.push({ name: "Meghu", age: 40 });
personStack.push({ name: "Tulasi", age: 45 });
personStack.push({ name: "Kusu", age: 50 });
console.log("\nPerson Stack:");
personStack.display();
console.log("Peek:", personStack.peek()); // Should return { name: "kusu", age: 50 }
console.log("Pop:", personStack.pop()); // Should return { name: "kusu", age: 50 }
personStack.display();
// Check if the stack is empty
console.log("Is number stack empty?", numberStack.isEmpty()); // Should return false, as there are items
numberStack.pop(); // Remove one item
numberStack.pop(); // Remove another item
console.log("Is number stack empty?", numberStack.isEmpty()); // Should return true, as the stack is now empty
