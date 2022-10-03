//HW
console.log("Hello World!");

//Values and Variable
let js = "amazing";
console.log(js);
console.log(2 + 5 + 7 + 4 - 6);

let firstName = "Ismail";
let lastName = "Hossain";
console.log(firstName + " " + lastName);

//Data Types
console.log(true);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Ismail");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2000;
console.log(typeof year);

console.log(typeof null);

//let var const
//Basic Operators
const ageIsmail = 2022 - 2000;
const ageJonas = 2022 - 1991;
console.log(ageIsmail, ageJonas);

const now = 2022;
const birthYear = 2000;
console.log(now - birthYear);

console.log(2 ** 3);
//2**3 means 2 to the power 3

//Assignment operators
let x = 5;
x += 5; //x= x+5
console.log(x);
x -= 5; //x= x-5
console.log(x);
x *= 5; //x = x*5
console.log(x);
x /= 5; // x= x/5
console.log(x);

x++;
console.log(x);
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageIsmail);
console.log(ageJonas < ageIsmail);
console.log(ageIsmail >= 18);

//Coding Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

BMIMark = massMark / heightMark ** 2;
console.log(`BMI of Mark is: ${BMIMark}`);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(`BMI of John is: ${BMIJohn}`);

if (BMIJohn > BMIMark) {
  console.log(`John has the higher BMI!`);
} else {
  console.log(`Mark has the higher BMI!`);
}

const day = "friday";

switch (day) {
  case "monday":
    console.log(`Today is monday`);
    break;
  case "friday":
    console.log(`Today is friday!`);
    break;
  default:
    console.log("Off day!");
}

const ageLimit = 16;
ageLimit >= 18 ? console.log(`allow to vote!`) : console.log(`Not allowed!`);
const vote = ageLimit >= 18 ? "vote" : "Not Vote!";
console.log(vote);
console.log(`I am Md. Ismail Hossain!`);
