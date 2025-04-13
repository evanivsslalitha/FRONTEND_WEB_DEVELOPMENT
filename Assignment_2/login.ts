// login.ts

import * as readlineSync from 'readline-sync'; // import readline-sync for input with masking

// Define User interface
interface User {
  username: string;
  password: string;
}

// Hardcoded list of users
const users: User[] = [
  { username: "lalitha", password: "lalitha123" },
  { username: "trisha", password: "trisha456" },
  { username: "chinnu", password: "chinnu789" },
  { username: "meghu", password: "meghu987" },
  { username: "tulasi", password: "tulasi654" }
];

// Login function
function login(username: string, password: string): void {
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    console.log(`✅ Login successful! Welcome, ${username}.`);
  } else {
    console.log("❌ Login failed. Invalid username or password.");
  }
}

// Ask for username and password (real input)
const username = readlineSync.question("Enter username: ");
const password = readlineSync.question("Enter password: ", {
  hideEchoBack: true, // Hide input for password
  mask: '*'           // Mask the password with *
});

// Call login function with user input
login(username, password);
