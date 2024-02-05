const title = document.getElementById("title");
title.innerText = "Eu sunt un titlu setat din JavaScript!";

const sendFilesButton = document.getElementById("send-files");
const sendFilesFeedback = document.getElementById("send-files-feedback");

sendFilesButton.addEventListener("click", () => {
    rectangle.scrollIntoView({
        behavior: "instant",
    });
    sendFilesFeedback.innerText = "Ai trimis fisierele cu succes!";
});

const shoppingList = document.getElementsByClassName("list-item");
const shoppingDoneButton = document.getElementById("shopping-done");

const shoppingListDone = document.getElementById("shopping-list-done");

function clickListener(event) {
    console.log(event);
    const shoppingListDoneItem = document.createElement("li");
    shoppingListDoneItem.innerText = event.target.innerText;

    shoppingListDone.appendChild(shoppingListDoneItem);

    event.target.innerText = event.target.innerText + " (Cumparat)";

    event.target.removeEventListener("click", clickListener);
}

for (let item of shoppingList) {
    item.addEventListener("click", clickListener);
}

shoppingDoneButton.addEventListener("click", () => {
    for (let item of shoppingList) {
        item.innerText = item.innerText + " (Cumparat)";
    }
});

const allLiItems = document.getElementsByTagName("li");
console.log(allLiItems);

const titleWithQuerySelector = document.querySelectorAll(".shopping-list .list-item:nth-of-type(3)");
console.log(titleWithQuerySelector);

const backgroundColors = ["red", "green", "blue", "purple", "pink", "#FFD700"];

const rectangle = document.querySelector(".rectangle");
rectangle.addEventListener("click", () => {
    rectangle.style.backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    rectangle.classList.toggle("rectangle-style-1");
});

const titleElement = document.createElement("h1");
titleElement.innerText = "Acesta este un titlu";
titleElement.classList.add("title");

rectangle.appendChild(titleElement);

let listElement = document.createElement("ul");
let listItem1Element = document.createElement("li");
listItem1Element.innerText = "List item 1";

let listItem2Element = document.createElement("li");
listItem2Element.innerText = "List item 2";

let listItem3Element = document.createElement("li");
listItem3Element.innerText = "List item 3";

let listItem4Element = document.createElement("li");
listItem4Element.innerText = "List item 4";

// listElement.appendChild(listItem1Element);
// listElement.appendChild(listItem1Element);
// listElement.appendChild(listItem1Element);
// listElement.appendChild(listItem1Element);

listElement.append(listItem1Element, listItem2Element, listItem3Element, listItem4Element);

rectangle.appendChild(listElement);

// rectangle.addEventListener("mouseleave", () => {
//     rectangle.style.backgroundColor = "blue";
// });

// rectangle.addEventListener("mouseenter", () => {
//     rectangle.style.backgroundColor = "green";
// });

const link = document.createElement("a");
link.innerText = "Link to Google";

link.setAttribute("href", "https://google.ro");
link.setAttribute("target", "_blank");
link.setAttribute("class", "link links");

rectangle.appendChild(link);

const shoppingListElement = document.querySelector(".shopping-list");
const shoppingListItems = shoppingListElement.getElementsByClassName("list-item");

console.log(shoppingListItems);
