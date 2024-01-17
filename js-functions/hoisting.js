/**
 * HOISTING
 *
 * var vs let vs const
 */

function randomFunction() {
    if (true) {
        let randomVariable = 10;

        console.log(randomVariable);
    }

    console.log(randomVariable);
}

randomFunction();

console.log(randomVariable);
