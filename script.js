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

// check if a mouse enter a div box
// check if a mouse leaves a div box
// when a div box is being entered
// set the background color to red

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", (event) => {
        console.log("Entered!");
        event.target.style.backgroundColor = "red";
    })

    box.addEventListener("mouseleave", (event) => {
        // later    
    })

    box.addEventListener("mousedown", (event) => {
        event.target.style.backgroundColor = "white";
    })

})