// // Qno.1 Answer

// var divisibleBy3 = prompt("Enter Any Number to check if it is divisible by 3");

// if (divisibleBy3 % 3 === 0) {
//     console.log("Number is divisible by 3");
// }
// else {
//     console.log("Number is not divisible by 3");
// }

// // Qno.2 Answer

// var oddOrEven = prompt("Enter Any Number to check if it is Even or Odd");

// if (oddOrEven % 2 === 0) {
//     console.log("Number is Even")
// } 
// else {
//     console.log("Number is Odd")
// }

// // Qno.3 Answer

// var age18 = prompt("Enter Your Age")

// if (age18 > 18) {
//     console.log("Old enough");
// }
// else{
//     console.log("Too young");
// }

// // Qno.4 Answer

// var userName = prompt("Enter Your Name");

// if (userName === 'Umar') {
//     console.log("Welcome!");
// }

// // Qno.5 Answer

// var divisibleBy3Again = prompt("Enter Any Number to check if it is divisible by 3");

// switch (divisibleBy3Again % 3) {
//     case 0:
//         console.log("Number is divisible by 3");
//         break;
//     default:
//         console.log("Number is not divisible by 3");
//         break;
// }

// // Qno.6 Answer

// var checkChar = prompt("Enter a character:");

// if (checkChar >= '0' && checkChar <= '9') {
//     console.log("The input is a number.");
// }
// else if (checkChar >= 'A' && checkChar <= 'Z') {
//     console.log("The input is an uppercase letter.");
// }
// else if (checkChar >= 'a' && checkChar <= 'z') {
//     console.log("The input is a lowercase letter.");
// }
// else if(checkChar == ''){
//     console.log("Empty...");
// }

// // Qno.7 Answer

// var number1 = +prompt("Enter the first number");
// var number2 = +prompt("Enter the second number");
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// var result;

// switch (operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`Result: ${result}`)
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`Result: ${result}`)
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`Result: ${result}`)
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`Result: ${result}`)
//         break;
//     case '%':
//         result = number1 % number2;
//         console.log(`Result: ${result}`)
//         break;
//     default:
//         console.log("Error!")
//         break;
// }

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