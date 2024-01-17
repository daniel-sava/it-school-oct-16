const number1 = "123";
const number2 = "6539.764";

console.log(parseFloat(number1));
console.log(parseInt(number2));

console.log(parseFloat(number1) === 123);

console.log(Math.max(...[1, 20, 876, -40]));

const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10];

console.log([...numbers1, ...numbers2]);

const person = {
    name: "Mihai",
    age: 20,
    address: {
        street: "Nume Strada",
        number: "10",
    },
};

function generateSibling(person, name, age, city) {
    return {
        ...person,
        name: name,
        age: age,
        address: {
            ...person.address,
            city: city,
        },
    };
}

console.log(generateSibling(person, "Ioana", 8, "Cluj"));

const text = `Hello! ${person.name}! You are ${person.age} years old. The result of 1 + 1 is ${1 + 1}`;

// window.alert();
// window.prompt("Enter your name", "Name");

console.log(Math.ceil(Math.random() * 95));

const dictionar = ["a", "b", "c", "d", "e", "X", "H", "L", 1, 6, 8, 5, 2];

function generateRandomPassword(length) {
    let password = "";

    while (password.length < length) {
        const index = Math.ceil(Math.random() * (dictionar.length - 1));
        password = password + dictionar[index];
    }

    return password;
}

console.log(generateRandomPassword(10));
