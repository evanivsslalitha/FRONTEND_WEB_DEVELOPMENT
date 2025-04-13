// Define enum for Operators
enum Operator {
    Add = '+',
    Subtract = '-',
    Multiply = '*',
    Divide = '/'
  }
  
  // Function to perform calculation
  function calculate(a: number, b: number, operator: Operator): number {
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
  
  const num1 = 10;
  const num2 = 5;
  
  console.log(`Addition: ${calculate(num1, num2, Operator.Add)}`);
  console.log(`Subtraction: ${calculate(num1, num2, Operator.Subtract)}`);
  console.log(`Multiplication: ${calculate(num1, num2, Operator.Multiply)}`);
  console.log(`Division: ${calculate(num1, num2, Operator.Divide)}`);
  