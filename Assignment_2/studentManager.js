// Array to store student records
var students = [];
// CREATE - Add a new student
function addStudent(student) {
    students.push(student);
    console.log("Student added successfully.");
}
// READ - Display all students
function displayStudents() {
    console.log("All Students:");
    students.forEach(function (student) {
        console.log("ID: ".concat(student.id, ", Name: ").concat(student.name, ", Age: ").concat(student.age, ", Course: ").concat(student.course));
    });
}
// UPDATE - Update a student by ID
function updateStudent(id, updatedData) {
    var student = students.find(function (s) { return s.id === id; });
    if (student) {
        Object.assign(student, updatedData);
        console.log("Student with ID ".concat(id, " updated successfully."));
    }
    else {
        console.log("Student with ID ".concat(id, " not found."));
    }
}
// DELETE - Remove a student by ID
function deleteStudent(id) {
    var index = students.findIndex(function (s) { return s.id === id; });
    if (index !== -1) {
        students.splice(index, 1);
        console.log("Student with ID ".concat(id, " deleted successfully."));
    }
    else {
        console.log("Student with ID ".concat(id, " not found."));
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
