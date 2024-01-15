let sesiunea = "Sesiunea 17";

function resetText() {
    console.log(sesiunea);
    sesiunea = "1";
}

function renameTextTo(text, newName) {
    text = newName;
    return text;
}

sesiunea = renameTextTo(sesiunea, "Sesiunea 18");
resetText();

console.log(sesiunea);
