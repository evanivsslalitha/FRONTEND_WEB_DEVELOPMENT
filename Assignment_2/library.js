// Define the class for Library Member
var LibraryMember = /** @class */ (function () {
    function LibraryMember(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    // Borrow a book
    LibraryMember.prototype.borrowBook = function (book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false; // Mark the book as borrowed
            console.log("".concat(this.name, " successfully borrowed \"").concat(book.title, "\"."));
        }
        else {
            console.log("Sorry, \"".concat(book.title, "\" is currently unavailable."));
        }
    };
    // Return a book
    LibraryMember.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.isAvailable = true; // Mark the book as available
            console.log("".concat(this.name, " successfully returned \"").concat(book.title, "\"."));
        }
        else {
            console.log("".concat(this.name, " does not have \"").concat(book.title, "\" borrowed."));
        }
    };
    // Display all borrowed books
    LibraryMember.prototype.displayBorrowedBooks = function () {
        if (this.borrowedBooks.length > 0) {
            console.log("".concat(this.name, "'s Borrowed Books:"));
            this.borrowedBooks.forEach(function (book) {
                console.log("- ".concat(book.title, " by ").concat(book.author));
            });
        }
        else {
            console.log("".concat(this.name, " has no borrowed books."));
        }
    };
    return LibraryMember;
}());
// Define the class for Library
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    // Add a book to the library
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("\"".concat(book.title, "\" by ").concat(book.author, " has been added to the library."));
    };
    // Display available books
    Library.prototype.displayAvailableBooks = function () {
        var availableBooks = this.books.filter(function (book) { return book.isAvailable; });
        if (availableBooks.length > 0) {
            console.log("Available Books:");
            availableBooks.forEach(function (book) {
                console.log("- ".concat(book.title, " by ").concat(book.author));
            });
        }
        else {
            console.log("No books are currently available.");
        }
    };
    // Display all books (borrowed and available)
    Library.prototype.displayAllBooks = function () {
        console.log("All Books in the Library:");
        this.books.forEach(function (book) {
            var status = book.isAvailable ? "Available" : "Borrowed";
            console.log("- ".concat(book.title, " by ").concat(book.author, " [").concat(status, "]"));
        });
    };
    return Library;
}());
// ---------- Example Usage ----------
// Create a new Library instance
var library = new Library();
// Add books to the library
var book1 = { id: 1, title: "1984", author: "George Orwell", isAvailable: true };
var book2 = { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true };
var book3 = { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true };
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
// Create a new Library Member
var member = new LibraryMember("Lalitha");
// Display available books
library.displayAvailableBooks();
// Alice borrows "1984"
member.borrowBook(book1);
// Display available books after borrowing
library.displayAvailableBooks();
// Display all books (borrowed and available)
library.displayAllBooks();
// Alice returns "1984"
member.returnBook(book1);
// Display available books after returning
library.displayAvailableBooks();
