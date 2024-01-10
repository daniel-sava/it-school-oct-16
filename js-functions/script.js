// const user = {
//     username: "daniel",
//     subscription: "MEDIUM",
// };

// const pages = [
//     { name: "Homepage", subscriptions: ["LOW", "MEDIUM", "HIGH"] },
//     { name: "Artists", subscriptions: ["MEDIUM", "HIGH"] },
//     { name: "Lounge", subscriptions: ["HIGH"] },
//     { name: "Listen", subscriptions: ["LOW", "MEDIUM"] },
// ];

// for (let page of pages) {
//     if (page.name === "Lounge") {
//         // if (page.subscriptions.includes(user.subscription)) {
//         //     console.log("Utilizatorul are acces!");
//         // } else {
//         //     console.log("Utilizatorul NU are acces!");
//         // }
//         let userHasAccess = false;

//         for (let subscription of page.subscriptions) {
//             if (subscription === user.subscription) {
//                 userHasAccess = true;
//             }
//         }

//         if (userHasAccess) {
//             console.log("Utilizatorul are acces!");
//         } else {
//             console.log("Utilizatorul NU are acces!");
//         }
//     }
// }

// 1. Avem un utilizator, care are un username si o subscriptie. Subscriptia poate fi LOW, MEDIUM, HIGH.

// 2. Avem o lista de pagini, iar fiecare pagina contine numele si o lista de subscriptii care pot accesa pagina.

// Sa se scrie o secventa de cod, care verifica daca utilizatorul de la punctul 1, are acces pe baza subscriptiei, la una din paginile de la punctul 2. Pagina este data.

const user = {
    username: "daniel",
    subscription: "FREE TRIAL",
};

const user2 = {
    username: "catalin",
    subscription: "HIGH",
};

// Sa se scrie sau modifice o secventa de cod pentru a verifica daca user2 are acces la pagina "Lounge".

const pages = [
    { name: "Homepage", subscriptions: ["LOW", "MEDIUM", "HIGH"] },
    { name: "Artists", subscriptions: ["MEDIUM", "HIGH"] },
    { name: "Lounge", subscriptions: ["HIGH"] },
    { name: "Listen", subscriptions: ["LOW", "MEDIUM"] },
];

// Daca utilizatorul are FREE TRIAL, primeste acces automat, fara a se verifica subscriptiile necesare pentru accesarea paginii

for (let page of pages) {
    if (page.name === "Listen") {
        let userHasAccess = false;

        if (user.subscription === "FREE TRIAL") {
            userHasAccess = true;
        } else {
            for (let acceptedSubscription of page.subscriptions) {
                if (acceptedSubscription === user.subscription) {
                    userHasAccess = true;
                    break;
                }
            }
        }

        if (userHasAccess) {
            console.log("Are acces");
        } else {
            console.log("NU are acces");
        }

        break;
    }
}

/**
 * 1. Trece prin fiecare pagina
 * 2. Verifica daca numele paginii corespunde cu cea cautata
 * 3. Verifica daca utilizatorul are o subscriptie valida pentru accesarea paginii.
 * 4. Asigura sau respinge accesul utilizatorului.
 */
