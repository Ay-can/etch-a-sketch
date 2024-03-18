const container = document.querySelector(".container");
const btn = document.querySelector("#btn-grid");

function createGrid() {
    const gridSize = 16 * 16;
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    }
}

function deleteGrid() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        container.removeChild(box);
    })
}

btn.addEventListener("click", (event) => {
    console.log("Clicked!");
    deleteGrid();    
})


// check if a mouse enter a div box
// check if a mouse leaves a div box
// when a div box is being entered
// set the background color to red
createGrid();

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", (event) => {
        console.log("Entered!");
        event.target.style.backgroundColor = getRandomColor();
    });

    box.addEventListener("mouseleave", (event) => {
        // later    
    });
})

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

