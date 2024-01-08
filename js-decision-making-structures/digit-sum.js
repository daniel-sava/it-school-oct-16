// Scrie o secventa de cod care face suma cifrelor unui numar;
let number = 36298;
let sum = 0;

let iteration = 1;
while (number !== 0) {
    console.log("Iteratia: ", iteration);
    console.log("Numarul este: ", number);
    console.log("Suma este: ", sum);

    sum = sum + (number % 10);
    number = Math.floor(number / 10);

    iteration++;
}

// console.log("Suma finala: ", sum);

// Scrie o secventa care numara cate cifre contine un numar
// let number = 0;
// let count = 0;

// let iteration = 1;
// while (number !== 0) {
//     console.log("Iteratia: ", iteration);
//     console.log("Count: ", count);
//     console.log("Number: ", number);

//     count++;
//     number = Math.floor(number / 10);

//     iteration++;
// }

// console.log("Numar cifre: ", count);
