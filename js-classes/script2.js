class PersonProfile {
    bornIn;

    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;

        this.initialize();
    }

    initialize() {
        this.bornIn = 2024 - this.age;
    }

    greet() {
        console.log(`Salut! Eu sunt ${this.name} si ${this.showMyAge()}, nascut in ${this.bornIn}`);
    }

    showMyAge() {
        return `am ${this.age} ani!`;
    }
}

const person1 = new PersonProfile("Andrei", 10, "Arad");
person1.greet();
// person1.showMyAge();
