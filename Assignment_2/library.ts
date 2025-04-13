// Define the interface for a book
interface Book {
    id: number;
    title: string;
    author: string;
    isAvailable: boolean; // If the book is available for borrowing
  }
  
  // Define the class for Library Member
  class LibraryMember {
    name: string;
    borrowedBooks: Book[];
  
    constructor(name: string) {
      this.name = name;
      this.borrowedBooks = [];
    }
  
    // Borrow a book
    borrowBook(book: Book): void {
      if (book.isAvailable) {
        this.borrowedBooks.push(book);
        book.isAvailable = false; // Mark the book as borrowed
        console.log(`${this.name} successfully borrowed "${book.title}".`);
      } else {
        console.log(`Sorry, "${book.title}" is currently unavailable.`);
      }
    }
  
    // Return a book
    returnBook(book: Book): void {
      const index = this.borrowedBooks.indexOf(book);
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
        book.isAvailable = true; // Mark the book as available
        console.log(`${this.name} successfully returned "${book.title}".`);
      } else {
        console.log(`${this.name} does not have "${book.title}" borrowed.`);
      }
    }
  
    // Display all borrowed books
    displayBorrowedBooks(): void {
      if (this.borrowedBooks.length > 0) {
        console.log(`${this.name}'s Borrowed Books:`);
        this.borrowedBooks.forEach((book) => {
          console.log(`- ${book.title} by ${book.author}`);
        });
      } else {
        console.log(`${this.name} has no borrowed books.`);
      }
    }
  }
  
  // Define the class for Library
  class Library {
    books: Book[];
  
    constructor() {
      this.books = [];
    }
  
    // Add a book to the library
    addBook(book: Book): void {
      this.books.push(book);
      console.log(`"${book.title}" by ${book.author} has been added to the library.`);
    }
  
    // Display available books
    displayAvailableBooks(): void {
      const availableBooks = this.books.filter((book) => book.isAvailable);
      if (availableBooks.length > 0) {
        console.log("Available Books:");
        availableBooks.forEach((book) => {
          console.log(`- ${book.title} by ${book.author}`);
        });
      } else {
        console.log("No books are currently available.");
      }
    }
  
    // Display all books (borrowed and available)
    displayAllBooks(): void {
      console.log("All Books in the Library:");
      this.books.forEach((book) => {
        const status = book.isAvailable ? "Available" : "Borrowed";
        console.log(`- ${book.title} by ${book.author} [${status}]`);
      });
    }
  }
  
  // ---------- Example Usage ----------
  
  // Create a new Library instance
  const library = new Library();
  
  // Add books to the library
  const book1: Book = { id: 1, title: "1984", author: "George Orwell", isAvailable: true };
  const book2: Book = { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true };
  const book3: Book = { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true };
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  // Create a new Library Member
  const member = new LibraryMember("Lalitha");
  
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
  