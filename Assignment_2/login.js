"use strict";
// login.ts
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync"); // import readline-sync for input with masking
// Hardcoded list of users
var users = [
    { username: "lalitha", password: "lalitha123" },
    { username: "trisha", password: "trisha456" },
    { username: "chinnu", password: "chinnu789" },
    { username: "meghu", password: "meghu987" },
    { username: "tulasi", password: "tulasi654" }
];
// Login function
function login(username, password) {
    var user = users.find(function (u) { return u.username === username && u.password === password; });
    if (user) {
        console.log("\u2705 Login successful! Welcome, ".concat(username, "."));
    }
    else {
        console.log("❌ Login failed. Invalid username or password.");
    }
}
// Ask for username and password (real input)
var username = readlineSync.question("Enter username: ");
var password = readlineSync.question("Enter password: ", {
    hideEchoBack: true, // Hide input for password
    mask: '*' // Mask the password with *
});
// Call login function with user input
login(username, password);
