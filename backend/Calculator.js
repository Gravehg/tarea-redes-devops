class Calculator {
  // Function to add two numbers
  static add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers.");
    }
    return a + b;
  }

  // Function to subtract two numbers
  static subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers.");
    }
    return a - b;
  }

  // Function to multiply two numbers
  static multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers.");
    }
    return a * b;
  }

  // Function to divide two numbers
  static divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers.");
    }
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

// Export the Calculator class
module.exports = Calculator;
