const cardSymbols = ["Hearts", "Spades", "Diamonds", "Clubs"];
const availableCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "Joker"];

function initializeDeckOfCards() {
    const deckOfCards = [];

    for (let symbol of cardSymbols) {
        for (let card of availableCards) {
            if (card !== "Joker") {
                deckOfCards.push({ card, symbol });
            }
        }
    }

    deckOfCards.push({ card: "Joker", symbol: "Black" });
    deckOfCards.push({ card: "Joker", symbol: "Red" });

    return deckOfCards;
}

function shuffleDeckOfCards(deckOfCards) {
    for (let i = 0; i < deckOfCards.length; i++) {
        let j = Math.floor(Math.random() * (deckOfCards.length - 1));
        let temp = deckOfCards[i];
        deckOfCards[i] = deckOfCards[j];
        deckOfCards[j] = temp;
    }
}

function dealCards(deck) {
    return [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
}

function startGame() {
    const deck = initializeDeckOfCards();
    shuffleDeckOfCards(deck);

    console.log(deck);
}
