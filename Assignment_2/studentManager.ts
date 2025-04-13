// Define Student interface
interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
  }
  
  // Array to store student records
  let students: Student[] = [];
  
  // CREATE - Add a new student
  function addStudent(student: Student): void {
    students.push(student);
    console.log("Student added successfully.");
  }
  
  // READ - Display all students
  function displayStudents(): void {
    console.log("All Students:");
    students.forEach((student) => {
      console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
    });
  }
  
  // UPDATE - Update a student by ID
  function updateStudent(id: number, updatedData: Partial<Student>): void {
    const student = students.find((s) => s.id === id);
    if (student) {
      Object.assign(student, updatedData);
      console.log(`Student with ID ${id} updated successfully.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // DELETE - Remove a student by ID
  function deleteStudent(id: number): void {
    const index = students.findIndex((s) => s.id === id);
    if (index !== -1) {
      students.splice(index, 1);
      console.log(`Student with ID ${id} deleted successfully.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // ---------- Example Usage ----------
  
  // Add students
  addStudent({ id: 1, name: "Lalitha", age: 20, course: "CSE" });
  addStudent({ id: 2, name: "Srianish", age: 21, course: "ECE" });
  
  // Display students
  displayStudents();
  
  // Update student
  updateStudent(1, { name: "Evani Lalitha", age: 19 });
  
  // Display after update
  displayStudents();
  
  // Delete student
  deleteStudent(2);
  
  // Display after deletion
  displayStudents();
  