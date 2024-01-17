const a = 10;
const b = 50;

// &&

if (a > 10 && b < 100) {
}

if (false && b < 100) {
}

if (false && true) {
}

if (false) {
}

// ||

if (a > 10 || b < 100) {
}

if (false || b < 100) {
}

if (false || true) {
}

if (true) {
}

// || ex: 2

if (a > 0 || b < 100) {
}

if (true || b < 100) {
}

if (true) {
}

// !

if (a === 10 && b === 50) {
}

if (true && true) {
}

if (a !== 10 && b !== 50) {
}

// sauuuu

if (!(a === 10 && b === 50)) {
}

if (!(true && true)) {
}

if (!true) {
}

if (false) {
}

/**
 * !
 *
 * !true => false
 * !false => true
 */

const name = "";
const num = 0;
if (num) {
}
