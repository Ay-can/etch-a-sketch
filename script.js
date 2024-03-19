const container = document.querySelector(".container");
const btn = document.querySelector("#btn-grid");

// First method
function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = 500 / gridSize + "px";
        div.style.height = 500 / gridSize + "px";
        div.style.flex = "auto";
        container.appendChild(div);
    }
}
createGrid(16);
drawBox();

function deleteGrid() {
    const boxes = document.querySelectorAll(".container > div");
    boxes.forEach((box) => {
        container.removeChild(box);
    })
}

btn.addEventListener("click", (event) => {
    let gridSize = prompt("Enter a number between 10 and 100");
    if (gridSize < 10 || gridSize > 100) {
        alert("Enter a number between 10 and 100!");
        return;
    }

    deleteGrid();    
    createGrid(gridSize);
    drawBox();
})


// check if a mouse enter a div box
// check if a mouse leaves a div box
// when a div box is being entered
// set the background color to red
function drawBox() {
    const boxes = document.querySelectorAll(".container > div");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (event) => {
            console.log("Entered!");
            event.target.style.backgroundColor = getRandomColor();
        });

        box.addEventListener("mouseleave", (event) => {
            // later    
        });
    })
}

function getRandomColor() {
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        let hexIndex = Math.floor(Math.random() * hexValues.length);
        let hexValue = hexValues[hexIndex];
        hexColor += hexValue;
    }

    return hexColor;
}

