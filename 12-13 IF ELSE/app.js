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