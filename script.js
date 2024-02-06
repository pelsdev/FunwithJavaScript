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

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
} else {
    console.log(`Mark's BMI (${BMIMark}) is lesser than John's BMI (${BMIJohn})!`)

}