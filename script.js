const container = document.querySelector(".container");

function createGrid() {
    const gridSize = 16 * 16;
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    }
}
createGrid();