const boardNameInput = document.getElementById("board-name");
const boardTitleElement = document.getElementById("board-title");

const addColumnInput = document.getElementById("column-name");
const addColumnButton = document.getElementById("column-add");

const boardElement = document.getElementById("board");

let columns = [];

function getDefaultBoardName() {
    const defaultBoardName = localStorage.getItem("boardName");
    setBoardName(defaultBoardName ? defaultBoardName : "New Board");
}

function setBoardName(name) {
    boardNameInput.value = name;
    boardTitleElement.innerHTML = `<i class="fa-solid fa-clipboard"></i> ${name}`;
    localStorage.setItem("boardName", name);
}

boardNameInput.addEventListener("change", (event) => {
    setBoardName(event.target.value);
});

addColumnButton.addEventListener("click", () => {
    const newColumnName = addColumnInput.value;
    if (!newColumnName) return;

    columns.push({ name: newColumnName, tasks: [] });
    saveColumns();
});

function getDefaultColumns() {
    const defaultColumns = localStorage.getItem("columns");
    if (defaultColumns) {
        columns = JSON.parse(defaultColumns);
    }

    showColumns();
}

// [1, 2, 3, 4] => JSON.stringify([1, 2, 3, 4]) => "[1, 2, 3, 4]";
// { name: 'Andrei' } => JSON.stringify({ name: 'Andrei' }) => "{ name: "Andrei" }";

// JSON.parse("{ name: "Andrei" }") => { name: 'Andrei' }
// JSON.parse("[1, 2, 3, 4]") => [1, 2, 3, 4]

function saveColumns() {
    localStorage.setItem("columns", JSON.stringify(columns));
}

function showColumns() {
    columns.forEach((column) => {
        const columnElement = document.createElement("div");
        columnElement.classList.add("column");

        const columnTitleElement = document.createElement("h3");
        columnTitleElement.textContent = column.name;

        columnElement.appendChild(columnTitleElement);

        boardElement.appendChild(columnElement);
    });
}

getDefaultBoardName();
getDefaultColumns();
