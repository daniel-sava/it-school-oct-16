let iLikeJavascript = false;

while (iLikeJavascript) {
    console.log("WHILE! Imi place JavaScript");

    // iLikeJavascript = false;
}

// iLikeJavascript = true;

// let number = 1;

// do {
//     console.log(number);
// } while (number < 1);

let number = 0;
let count = 0;

do {
    count++;
    number = Math.floor(number / 10);
} while (number !== 0);

console.log("Numar cifre: ", count);
