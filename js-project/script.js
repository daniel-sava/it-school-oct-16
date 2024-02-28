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
    refreshBoard();
});

function getDefaultColumns() {
    const defaultColumns = localStorage.getItem("columns");
    if (defaultColumns) {
        columns = JSON.parse(defaultColumns);
    }

    showColumns();
}

function saveColumns() {
    localStorage.setItem("columns", JSON.stringify(columns));
}

function showColumns() {
    columns.forEach((column, columnIndex) => {
        const columnElement = document.createElement("div");
        columnElement.classList.add("column");
        columnElement.setAttribute("columnId", columnIndex);

        columnElement.addEventListener("dragover", (event) => {
            event.preventDefault();

            event.target.classList.add("dragging-over");
        });

        columnElement.addEventListener("dragleave", (event) => {
            event.target.classList.remove("dragging-over");
        });

        columnElement.addEventListener("drop", (event) => {
            event.target.classList.remove("dragging-over");
            const data = JSON.parse(event.dataTransfer.getData("text"));

            const columnIndex = event.target.getAttribute("columnId");
            addTaskToColumn(columns[data.columnId].tasks[data.taskId], columns[columnIndex].name);
            removeTaskFromColumn(data.taskId, data.columnId);
        });

        const columnTitleContainer = document.createElement("div");
        columnTitleContainer.classList.add("title-container");

        const columnTitleElement = document.createElement("h3");
        columnTitleElement.classList.add("title");
        columnTitleElement.textContent = column.name;

        const columnTitleDeleteButton = document.createElement("button");
        columnTitleDeleteButton.classList.add("delete");
        columnTitleDeleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        columnTitleDeleteButton.addEventListener("click", () => {
            deleteColumn(column.name);
        });

        columnTitleContainer.appendChild(columnTitleElement);
        columnTitleContainer.appendChild(columnTitleDeleteButton);

        const tasksContainerElement = document.createElement("div");
        tasksContainerElement.classList.add("tasks");
        tasksContainerElement.setAttribute("columnId", columnIndex);

        for (let [index, task] of column.tasks.entries()) {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.setAttribute("draggable", true);
            taskElement.setAttribute("taskId", index);
            taskElement.setAttribute("columnId", columnIndex);
            taskElement.textContent = task;

            tasksContainerElement.appendChild(taskElement);

            taskElement.addEventListener("dragstart", (event) => {
                event.dataTransfer.setData(
                    "text/plain",
                    JSON.stringify({
                        taskId: event.target.getAttribute("taskId"),
                        columnId: event.target.getAttribute("columnId"),
                    })
                );

                event.target.classList.add("dragging");
            });

            taskElement.addEventListener("dragend", (event) => {
                event.target.classList.remove("dragging");
            });
        }

        const createTaskInputLabel = document.createElement("p");
        createTaskInputLabel.classList.add("label");
        createTaskInputLabel.textContent = "Adauga un nou task...";
        createTaskInputLabel.style.display = "none";

        const createTaskInput = document.createElement("input");
        createTaskInput.classList.add("create-task");
        createTaskInput.setAttribute("type", "text");
        createTaskInput.style.display = "none";

        createTaskInput.addEventListener("change", (event) => {
            if (!event.target.value) return;

            addTaskToColumn(event.target.value, column.name);
            event.target.value = "";
        });

        columnElement.appendChild(columnTitleContainer);
        columnElement.appendChild(tasksContainerElement);
        columnElement.appendChild(createTaskInputLabel);
        columnElement.appendChild(createTaskInput);

        tasksContainerElement.addEventListener("click", () => {
            createTaskInputLabel.style.display = "block";
            createTaskInput.style.display = "block";
        });

        boardElement.appendChild(columnElement);
    });
}

function addTaskToColumn(task, columnName) {
    for (let column of columns) {
        if (column.name === columnName) {
            column.tasks.push(task);
            break;
        }
    }

    saveColumns();
    refreshBoard();
    /**
     * IMBUNATATIRI!
     *
     * Selectam coloana cu id pe care am adaugat task
     * Sa selected div cu clasa tasks din coloana respectiva
     * Append child la task
     */
}

function removeTaskFromColumn(taskIndex, columnIndex) {
    columns[columnIndex].tasks.splice(taskIndex, 1);

    saveColumns();
    refreshBoard();
}

function refreshBoard() {
    boardElement.innerHTML = "";
    showColumns();
}

function deleteColumn(columnName) {
    columns = columns.filter((column) => {
        return column.name !== columnName;
    });

    saveColumns();
    refreshBoard();
}

getDefaultBoardName();
getDefaultColumns();
