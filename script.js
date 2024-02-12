let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

// coding challenge 1 and 2

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

// coding challenge 3

const dolphineScore = (96 + 108 + 50) / 3;
const koalasScore = (107 + 97 + 50) / 3;
console.log(dolphineScore, koalasScore);

if (dolphineScore > koalasScore && dolphineScore >= 100){
    console.log(`Dolphines won the trophy with the average score of(${dolphineScore})🏆!`);
}else if (dolphineScore < koalasScore && koalasScore >= 100){
    console.log(`koalas won the trophy with the average score of(${koalasScore})🏆!`);
}else if (dolphineScore === koalasScore && dolphineScore >= 100 && koalasScore >= 100){
    console.log('Both Dolphines and Koalas won the trophy🏆')
} else {
    console.log('There was no winner')
}

// coding challenge 4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);