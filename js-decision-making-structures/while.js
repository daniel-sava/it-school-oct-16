let waterLevel = 67;

while (waterLevel > 0) {
    waterLevel = waterLevel - 2;

    if (waterLevel !== 0) {
        console.log("Current water level is: ", waterLevel);
    } else {
        console.log("Congrats!");
    }
}

console.log("After while");

// Ex 1: afiseaza toate numerele din array
const numbers = [8, 6, 10, 2, 44, -55, 100, 110, 67, 54, 66];
let currentIndex = 0;

while (currentIndex <= numbers.length - 1) {
    console.log(numbers[currentIndex]);
    currentIndex = currentIndex + 1;
}

// Ex 2: afiseaza toate numerele de la 1 la n;
// const n = 34;
// let currentNumber = 1;

// while (n >= currentNumber) {
//     console.log(currentNumber);
//     currentNumber++;
// }

// Ex 3: afiseaza toate numere pare la 1 la n
const n = 34;
let currentNumber = 1;

while (n >= currentNumber) {
    if (currentNumber % 2 !== 0) {
        console.log(currentNumber);
    }
    currentNumber++;
}
