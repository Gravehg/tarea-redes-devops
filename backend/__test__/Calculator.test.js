const Calculator = require("../Calculator");

describe("Calculator class", () => {
  it("Adds two numbers correctly", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  it("Subtracts two numbers correctly", () => {
    expect(Calculator.subtract(6, 6)).toBe(0);
  });

  it("Multiplies two numbers correctly", () => {
    expect(Calculator.multiply(3, 4)).toBe(12);
  });

  it("Divides two numbers correctly", () => {
    expect(Calculator.divide(5, 5)).toBe(1);
  });

  it("Divides negatives", () => {
    expect(Calculator.divide(-5, -1)).toBe(5);
  });
  it("throws an error when dividing by zero", () => {
    expect(() => {
      Calculator.divide(6, 0);
    }).toThrow("Division by zero is not allowed.");
  });

  it("throws an error when arguments are not numbers", () => {
    expect(() => {
      Calculator.add(6, "a");
    }).toThrow("Both arguments must be numbers.");
  });
});
