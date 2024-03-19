const container = document.querySelector(".container");
const btn = document.querySelector("#btn-grid");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        //div.style.border = "1px solid black";
        div.style.width = 400 / gridSize + "px";
        div.style.height = 400 / gridSize + "px";
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

let isErasing = false;
const eraserBtn = document.querySelector("#btn-eraser");
eraserBtn.addEventListener("click", () => {
    isErasing = true;
});

let isRainbow = false;
const rainbowBtn = document.querySelector("#btn-rainbow");
rainbowBtn.addEventListener("click", () => {
   isRainbow = true; 
   isErasing = false;
});

function drawBox() {
    const boxes = document.querySelectorAll(".container > div");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (event) => {
            if (!isErasing && isRainbow) {
                event.target.style.backgroundColor = getRandomColor();
                event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
            } else {
                event.target.style.backgroundColor = "white";
                event.target.style.opacity = 1;
            }
        });
    })
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red},${green}, ${blue})`;    

    return rgb;
}