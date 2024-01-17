const numbers = [-1, 74, 2, -20, 10, 204, 86, 73, 90];

/**
 * Tema:
 * Faceti functia bubble sort sa poata sorta atat crescator, cat si descrescator
 */

function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] < numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
}

bubbleSort(numbers);

console.log(numbers);

const numbers2 = [10, 5, 3, -7];

bubbleSort(numbers2);

console.log(numbers2);

let initialNumber = 24;

function addTenToNumber(number) {
    number = number + 10;
    return number;
}

initialNumber = addTenToNumber(initialNumber);

console.log(initialNumber);

const person = {
    name: "Andrei",
    age: 10,
};

function happyBirthday(user) {
    user.age++;
}

happyBirthday(person);

console.log(person);

let numeFunctie = function (param1) {
    param1.age++;
};

let arrowFunction = (param1, param2) => {
    param1.age++;
};

numeFunctie(person);

arrowFunction(person);

console.log(person);

console.log(Math.ceil(Math.random() * 4));
