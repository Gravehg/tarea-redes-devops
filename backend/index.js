const express = require("express");
const path = require("path");

const Calculator = require("./Calculator");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//Nuevo comentario para probar
app.post("/calculate", (req, res) => {
  try {
    const { number1, number2, operation } = req.body;

    if (
      typeof number1 !== "number" ||
      typeof number2 !== "number" ||
      !["add", "subtract", "multiply", "divide"].includes(operation)
    ) {
      return res.status(400).json({ error: "Invalid input or operation" });
    }

    let result;

    // Perform the calculation based on the operation
    switch (operation) {
      case "add":
        result = Calculator.add(number1, number2);
        break;
      case "subtract":
        result = Calculator.subtract(number1, number2);
        break;
      case "multiply":
        result = Calculator.multiply(number1, number2);
        break;
      case "divide":
        if (number2 === 0) {
          return res.status(400).json({ error: "Cannot divide by zero" });
        }
        result = Calculator.divide(number1, number2);
        break;
      default:
        return res.status(400).json({ error: "Unknown operation" });
    }

    res.json({ result });
  } catch {
    res.redirect("/");
  }
});

app.listen(3000, () => {});
