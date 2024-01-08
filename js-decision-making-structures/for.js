for (let i = 0; i >= 10; i = i + 2) {
    console.log(i);
}

// Scrie o secventa de cod care face suma primelor N numere (N >= 0)
const N = 341;
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum = sum + i;
}

console.log(sum);

// Scrie o secventa de cod care face suma primelor N numere (N >= 0), in care N este pe rand fiecare numar din lista de mai jos

const numbersList = [34, 65, 98, 12, 190];

for (let number of numbersList) {
    let sum = 0;
    let currentNumber = 1;

    while (currentNumber <= number) {
        sum = sum + currentNumber;
        currentNumber++;
    }

    console.log("Suma pentru ", number, "este: ", sum);
}
