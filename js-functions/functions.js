// 1. Avem un utilizator, care are un username si o subscriptie. Subscriptia poate fi LOW, MEDIUM, HIGH.

// 2. Avem o lista de pagini, iar fiecare pagina contine numele si o lista de subscriptii care pot accesa pagina.

// Sa se scrie o secventa de cod, care verifica daca utilizatorul de la punctul 1, are acces pe baza subscriptiei, la una din paginile de la punctul 2. Pagina este data.
// Daca utilizatorul are FREE TRIAL, primeste acces automat, fara a se verifica subscriptiile necesare pentru accesarea paginii

const user1 = {
    username: "daniel",
    subscription: "FREE TRIAL",
};

const user2 = {
    username: "catalin",
    subscription: "HIGH",
};

const user3 = {
    username: "raluca",
    subscription: "LOW",
};

const pages = [
    { name: "Homepage", subscriptions: ["LOW", "MEDIUM", "HIGH"] },
    { name: "Artists", subscriptions: ["MEDIUM", "HIGH"] },
    { name: "Lounge", subscriptions: ["HIGH"] },
    { name: "Listen", subscriptions: ["LOW", "MEDIUM"] },
];

function userHasAccessToPage(user, pageName) {
    for (let page of pages) {
        if (page.name === pageName) {
            const userHasAccess = isUserSubscriptionValid(user.subscription, page.subscriptions);

            if (userHasAccess) {
                console.log(user.username, " are acces pe ", pageName);
            } else {
                console.log(user.username, " nu are acces pe ", pageName);
            }

            break;
        }
    }
}

function isUserSubscriptionValid(subscription, pageSubscriptions) {
    if (subscription === "FREE TRIAL") {
        return true;
    }

    for (let acceptedSubscription of pageSubscriptions) {
        if (acceptedSubscription === subscription) {
            return true;
        }
    }

    return false;
}

userHasAccessToPage(user1, "Homepage");
userHasAccessToPage(user1, "Lounge");
userHasAccessToPage(user2, "Listen");
userHasAccessToPage(user3, "Artists");
