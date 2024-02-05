let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

// coding challenge 1

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log (BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log (markHigherBMI);