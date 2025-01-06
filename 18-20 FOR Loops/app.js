// Qno.1 Answer

const div1 = document.querySelector(".div1");

for (let i = 1; i <= 5; i++) {
    div1.innerHTML += 'Hello World <br>'
}

// Qno.2 Answer

const div2 = document.querySelector(".div2");

for (let i = 1; i <= 10; i++) {
    div2.innerHTML += `${i} <br>`
}

// Qno.3 Answer

const number1 = prompt("Enter a number to print its multiplication table");
const number2 = prompt("Enter length of multiplication table");

const div3 = document.querySelector(".div3");

div3.innerHTML = `Multiplication table of ${number1} <br>
Length ${number2} <br> <br>`

for (let i = 1; i <= number2; i++) {
    div3.innerHTML += `${number1} x ${i} = ${number1 * i} <br>`
}

// Qno.4 Answer

const a = ["Nokia", "Samsung", "Apple", "Sony", "Huawie"];

const div4 = document.querySelector(".div4");

for (let i = 0; i < a.length; i++) {
    div4.innerHTML += `${a[i]} <br>`
}

// Qno.5 Answer

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

const div5 = document.querySelector(".div5");

for (let i = 0; i < fruits.length; i++) {
    div5.innerHTML += `${fruits[i]} <br>`
}

div5.innerHTML += `<br>
Element at index 0 is ${fruits[0]} <br>
Element at index 1 is ${fruits[1]} <br>
Element at index 2 is ${fruits[2]} <br>
Element at index 3 is ${fruits[3]} <br>
Element at index 4 is ${fruits[4]} <br>`