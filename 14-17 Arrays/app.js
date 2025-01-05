// Qno.1 Answer

const studentsNames = [];

// Qno.2 Answer

const studentsNames2 = {};

// Qno.3 Answer

const stringsArray = ['Umar', 'Anas', 'Ahmed', 'Hamza'];

// Qno.4 Answer

const numbersArray = [10, 20, 30, 40];

// Qno.5 Answer

const booleanArray = [true, false];

// Qno.6 Answer

const mixedArray = ['Umar', 10, true];

// Qno.7 Answer

const mobileNetworksInPakistan = ["Jazz", "Telenor", "Zong", "Ufone"];

// Qno.8 Answer

const educationQualificationsInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
const div1 = document.querySelector(".div1");

for (let i = 0; i < educationQualificationsInPakistan.length; i++) {
    div1.innerHTML += `<p style="margin: 0;">${i + 1}) ${educationQualificationsInPakistan[i]}</p>`
}

// Qno.9 Answer

const topMovies2015 = []

topMovies2015.push("Avengers: Age of Ultron");
topMovies2015.push("Spectre");
topMovies2015.push("Jurassic World");
topMovies2015.push("Inside Out");

const div2 = document.querySelector(".div2");

for (let i = 0; i < topMovies2015.length; i++) {
    div2.innerHTML += `<p style="margin: 0;">${i + 1}) ${topMovies2015[i]}</p>`
}
div2.innerHTML += `<h2>Length of the array: ${topMovies2015.length}`

// Qno.10 Answer

const favouriteCars = ["Audi", "Volve", "Ford", "Lamborghini"];

const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4")

for (let i = 0; i < favouriteCars.length; i++) {
    div3.innerHTML += `${favouriteCars[i]},`
}

div4.innerHTML = `
<p style="margin-bottom: 0;">First index of the array: ${0}</p>
<p style="margin: 0;">Car at first index of the array: ${favouriteCars[0]}</p>
<p style="margin: 0;">Last index of the array: ${3}</p>
<p style="margin: 0;">Car at last index of the array: ${favouriteCars[3]}</p>`

// Qno. 11 Answer

const studentNames = ["Micheal", "John", "Tony"];
const studentScores = [320, 230, 480];
const totalMarks = 500;

const div5 = document.querySelector(".div5");

// div5.innerHTML = `
// <p style="margin: 0;">Score of ${studentNames[0]} is ${studentScores[0]}. Percentage: ${(studentScores[0] * 100) / totalMarks }%</p>
// <p style="margin: 0;">Score of ${studentNames[1]} is ${studentScores[1]}. Percentage: ${(studentScores[1] * 100) / totalMarks }%</p>
// <p style="margin: 0;">Score of ${studentNames[2]} is ${studentScores[2]}. Percentage: ${(studentScores[2] * 100) / totalMarks }%</p>`
for (let i = 0; i < studentNames.length; i++) {
    div5.innerHTML += `
    <p style="margin: 0;">Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${((studentScores[i] * 100) / totalMarks)}%</p>`;
}

// Qno.12 Answer

const colors = ["Red", "Yellow", "Green", "Blue"];

const div6 = document.querySelector(".div6");

function displayArray() {
    div6.innerHTML = `<p style="margin: 0;">Updated Colors: ${colors.join(", ")}`;
}
displayArray();

// a.
const newColorBegin = prompt("Enter a color to add at the Beginning");
colors.unshift(newColorBegin);
displayArray();

// b.
const newColorEnd = prompt("Enter a color to add at the End");
colors.push(newColorEnd);
displayArray();

// c.
const color1 = prompt("Enter First color to add at the Beginning");
const color2 = prompt("Enter Second color to add at the Beginning");
colors.unshift(color1, color2);
displayArray();

// d.
colors.shift();
displayArray();

// e.
colors.pop();
displayArray();

// f.
const indexToAdd = prompt("Enter the index at which you want to add a color");
const colorToAdd = prompt("Enter the color name to add");
colors.splice(indexToAdd, 0, colorToAdd);
displayArray();

// g.
const indexToDelete = parseInt(prompt("Enter the index at which you want to delete colors"));
const numberToDelete = parseInt(prompt("Enter how many colors you want to delete"));
colors.splice(indexToDelete, numberToDelete);
displayArray();

// Qno.13 Answer

const studentScores2 = [320, 230, 480, 120];

const div7 = document.querySelector(".div7");

div7.innerHTML += `<p style="margin: 0;">Scores of Students : ${studentScores2}, `;

studentScores2.sort(function (a, b) { return a - b });

div7.innerHTML += `<p style="margin: 0;">Ordered Scores of Students : ${studentScores2}, `;

// Qno.14 Answer

const fruits = ['strawberry', 'apple', 'orange', 'banana'];

const div8 = document.querySelector(".div8");

div8.innerHTML += `
<p style="margin: 0;">Fruits list:</p>
<p style="margin: 0;">${fruits}</p> <br>`;

fruits.sort();

div8.innerHTML += `
<p style="margin: 0;">Ordered fruits list:</p>
<p style="margin: 0;">${fruits}</p>`;

// Qno.15 Answer

const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
const selectedCities = [];
selectedCities.push(cities[2], cities[3]);

const div9 = document.querySelector(".div9");

div9.innerHTML += `
<p style="margin: 0;">Cities list:</p>
<p style="margin: 0;">${cities}</p> <br>
<p style="margin: 0;">Selected cities list:</p>
<p style="margin: 0;">${selectedCities}</p>`;

// Qno.16 Answer

var arr = ["This", "is", "my", "cat"];

const div10 = document.querySelector(".div10");

div10.innerHTML += `
<p style="margin: 0;">Array:</p>
<p style="margin: 0;">${arr}</p> <br>`;

const joinArr = arr.join(" ");

div10.innerHTML += `
<p style="margin: 0;">String:</p>
<p style="margin: 0;">${joinArr}</p>`;

// Qno.17 Answer

const devices = ["keyboard", "mouse", "printer", "monitor"];

const div11 = document.querySelector(".div11");

div11.innerHTML += `
<p style="margin: 0;">Devices:</p>
<p style="margin: 0;">${devices}</p> <br>`;

div11.innerHTML += `
<p style="margin: 0;">Out:</p>
<p style="margin: 0;">${devices.shift()}</p>
<p style="margin: 0;">Out:</p>
<p style="margin: 0;">${devices.shift()}</p>
<p style="margin: 0;">Out:</p>
<p style="margin: 0;">${devices.shift()}</p>
<p style="margin: 0;">Out:</p>
<p style="margin: 0;">${devices.shift()}</p>`;

// Qno.18 Answer

const devices2 = ["keyboard", "mouse", "printer", "monitor"];

const div12 = document.querySelector(".div12");

div12.innerHTML += `
<p style="margin: 0;">Devices:</p>
<p style="margin: 0;">${devices2}</p> <br>`;

div12.innerHTML += `
<p style="margin: 0;">Out:</p>
<p style="margin: 0;">${devices2.pop()}</p>
<p style="margin: 0;">Out:</p>
<p style="margin: 0;">${devices2.pop()}</p>
<p style="margin: 0;">Out:</p>
<p style="margin: 0;">${devices2.pop()}</p>
<p style="margin: 0;">Out:</p>
<p style="margin: 0;">${devices2.pop()}</p>`;

// Qno.19 Answer

const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select name="phones" id="phoneSelect">');

for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}

document.write('</select>');

// Qno.20 Answer

const multidimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Qno.21 Answer

const multidimensionalMatrixArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];