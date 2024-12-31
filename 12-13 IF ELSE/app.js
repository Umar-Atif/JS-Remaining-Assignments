// Qno.1 Answer

var divisibleBy3 = prompt("Enter Any Number to check if it is divisible by 3");

if (divisibleBy3 % 3 === 0) {
    console.log("Number is divisible by 3");
}
else {
    console.log("Number is not divisible by 3");
}

// Qno.2 Answer

var oddOrEven = prompt("Enter Any Number to check if it is Even or Odd");

if (oddOrEven % 2 === 0) {
    console.log("Number is Even")
} 
else {
    console.log("Number is Odd")
}

// Qno.3 Answer

var age18 = prompt("Enter Your Age")

if (age18 > 18) {
    console.log("Old enough");
}
else{
    console.log("Too young");
}

// Qno.4 Answer

var userName = prompt("Enter Your Name");

if (userName === 'Umar') {
    console.log("Welcome!");
}

// Qno.5 Answer

var divisibleBy3Again = prompt("Enter Any Number to check if it is divisible by 3");

switch (divisibleBy3Again % 3) {
    case 0:
        console.log("Number is divisible by 3");
        break;
    default:
        console.log("Number is not divisible by 3");
        break;
}

// Qno.6 Answer

var checkChar = prompt("Enter a character:");

if (checkChar >= '0' && checkChar <= '9') {
    console.log("The input is a number.");
}
else if (checkChar >= 'A' && checkChar <= 'Z') {
    console.log("The input is an uppercase letter.");
}
else if (checkChar >= 'a' && checkChar <= 'z') {
    console.log("The input is a lowercase letter.");
}
else if(checkChar == ''){
    console.log("Empty...");
}

// Qno.7 Answer

var number1 = +prompt("Enter the first number");
var number2 = +prompt("Enter the second number");
var operator = prompt("Enter the operator (+, -, *, /, %):");

var result;

switch (operator) {
    case '+':
        result = number1 + number2;
        console.log(`Result: ${result}`)
        break;
    case '-':
        result = number1 - number2;
        console.log(`Result: ${result}`)
        break;
    case '*':
        result = number1 * number2;
        console.log(`Result: ${result}`)
        break;
    case '/':
        result = number1 / number2;
        console.log(`Result: ${result}`)
        break;
    case '%':
        result = number1 % number2;
        console.log(`Result: ${result}`)
        break;
    default:
        console.log("Error!")
        break;
}

// Qno.8 Answer

var time = prompt("Enter the time in 24-hour format (HHMM):");

if (time >= 0 & time < 1200){
    console.log("Good morning!");
}
else if (time >= 1200 && time < 1700){
    console.log("Good afternoon!")
}
else if (time >= 1700 && time < 2100){
    console.log("Good evening!")
}
else if (time >= 2100 && time < 2359){
    console.log("Good night!")
}
else {
    console.log("Invalid time input")
}

// Qno.9 Answer

var year = prompt("Enter a year in YYYY format:");

if (year > 0) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year");
    }
} else {
    console.log("Please enter a valid year");
}

// Qno.10 Answer

// a.
var correctPassword = "mySecret@123";

// b.
var enteredPassword = prompt("Enter Your Password");

// c.
if (enteredPassword == correctPassword){
    console.log("Correct! The password you entered matches the original password.");
}
else {
    console.log("Incorrect password.");
}

// Qno.11 Answer

var firstName = "Ali";

if (firstName === "Fahad") {
    document.write("Hello Fahad!");
} else {
    document.write("You are not Fahad");
}

// Qno.12 Answer

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);

// Qno.13 Answer

var intNumber1 = prompt("Enter First Number");
var intNumber2 = prompt("Enter Second Number");

if (intNumber1 > intNumber2) {
    console.log("Greater Number is " + intNumber1)
} else if (intNumber1 == intNumber2) {
    console.log("Both Numbers are equal " + intNumber1)
} else{
    console.log("Greater Number is " + intNumber2)
}    

// Qno.14 Answer

var posOrNeg = prompt("Enter Any Number");

if (posOrNeg < 0) {
    console.log(posOrNeg + " is Negative");
} else if (posOrNeg > 0) {
    console.log(posOrNeg + " is Positive")
} else {
    console.log(posOrNeg + " is Zero")
}

// Qno.15 Answer

var currentHour = prompt("Enter the current hour (in 24-hour format):");

if (currentHour >= 6 && currentHour < 9) {
    console.log("Breakfast is served");
} else if (currentHour >= 11 && currentHour < 13) {
    console.log("Time for lunch");
} else if (currentHour >= 17 && currentHour < 20) {
    console.log("It's dinner time");
} else {
    console.log("Sorry, you'll have to wait, or go get a snack");
}

// Qno.16 Answer

var checkDataType = prompt("Enter a value:");

if (typeof (checkDataType) === Number) {
    console.log("The type of the variable is a number");
} else if (typeof (checkDataType) === String) {
    console.log("The type of the variable is a string");
} else if (typeof (checkDataType) === Boolean) {
    console.log("The type of the variable is a boolean");
} else if (typeof (checkDataType) === undefined) {
    console.log("The type of the variable is undefined");
}

// Qno.17 Answer

var vowels = prompt("Enter Any Alphabet");
vowels = vowels.toLowerCase()

if (vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u") {
    console.log("True")
}
else {
    console.log("False")
}

// Qno.18 Answer

if (10 != 8) {
    console.log("True")
}
else {
    console.log("False")
}

// Qno.19 Answer

var monthChecker = prompt("Enter Any Month Number (1-12)");

switch (monthChecker) { 
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break;
    case 3:
        alert("March");
        break;
    case 4:
        alert("April");
        break;
    case 5:
        alert("May");
        break;
    case 6:
        alert("June");
        break;
    case 7:
        alert("July");
        break;
    case 8:
        alert("August");
        break;
    case 9:
        alert("September");
        break;
    case 10:
        alert("October");
        break;
    case 11:
        alert("November");
        break;
    case 12:
        alert("December");
        break;
    default:
        alert("Invalid month");
        break;
}

// Qno. 20 Answer

var age = prompt("Enter Your Age")

age > 18 ? console.log("Old enough") : console.log("Too young");