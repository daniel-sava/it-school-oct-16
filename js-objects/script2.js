let car1 = {
    brand: "Audi",
    hp: 150,
    details: {
        registrationNumber: "B111JSC",
        series: "DAJDHAK",
    },
    startEngine: () => {
        console.log("starting engine");
    },
};

car1.startEngine();

// 1. SHALLOW COPY
let car2 = car1;

car2.startEngine();

car2.hp = 250;
car1.brand = "BMW";

console.log(car1);
console.log(car2);

// 2. SHALLOW COPY
let car3 = { ...car1, details: { ...car1.details } };
car3.brand = "VW";
car3.hp = 183;

car3.details.series = "1111111";

car3.startEngine();

console.log(car3);

// 3. SHALLOW COPY
let car5 = Object.assign({}, car1);
car5.details.series = "CCCCCCCCCCC";
console.log(car5);

// 4. SHALLOW COPY
let car4 = JSON.parse(JSON.stringify(car1));
car4.brand = "Mercedes";
car4.details.series = "AAAAAAA";
console.log(car4);
car4.startEngine();
