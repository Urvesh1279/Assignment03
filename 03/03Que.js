// QUE:- Create basic “Hello world” app using node and express.
// Ans:- 

const express = require("express");

const app = express();

console.log("Hello world");
  

app.listen(3001, () => {
  console.log(chalk.green(`[+]App is Running on Port ${3001}`));
});
