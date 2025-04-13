// Define enum for Operators
var Operator;
(function (Operator) {
    Operator["Add"] = "+";
    Operator["Subtract"] = "-";
    Operator["Multiply"] = "*";
    Operator["Divide"] = "/";
})(Operator || (Operator = {}));
// Function to perform calculation
function calculate(a, b, operator) {
    switch (operator) {
        case Operator.Add:
            return a + b;
        case Operator.Subtract:
            return a - b;
        case Operator.Multiply:
            return a * b;
        case Operator.Divide:
            if (b === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return a / b;
        default:
            throw new Error("Invalid operator.");
    }
}
// ---------- Example Usage ----------
var num1 = 10;
var num2 = 5;
console.log("Addition: ".concat(calculate(num1, num2, Operator.Add)));
console.log("Subtraction: ".concat(calculate(num1, num2, Operator.Subtract)));
console.log("Multiplication: ".concat(calculate(num1, num2, Operator.Multiply)));
console.log("Division: ".concat(calculate(num1, num2, Operator.Divide)));
