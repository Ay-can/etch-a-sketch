const container = document.querySelector(".container");
const btn = document.querySelector("#btn-grid");
const gridSizeText = document.querySelector("#grid-size-text");

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.style.width = 400 / gridSize + "px";
    div.style.height = 400 / gridSize + "px";
    div.style.flex = "auto";
    container.appendChild(div);
  }
  gridSizeText.innerText = `${gridSize} x ${gridSize}`;
}

function deleteGrid() {
  const boxes = document.querySelectorAll(".container > div");
  boxes.forEach((box) => {
    container.removeChild(box);
  });
}

btn.addEventListener("click", () => {
  let gridSize = prompt("Enter a number between 4 and 100");
  if (gridSize < 4 || gridSize > 100) {
    alert("Enter a number between 10 and 100!");
    return;
  }

  deleteGrid();
  createGrid(gridSize);
  drawBox();
});

// Refactor all these buttons, find a better way to keep track
// of which buttons are currently active
let isErasing = false;
const eraserBtn = document.querySelector("#btn-eraser");
eraserBtn.addEventListener("click", () => {
  isErasing = true;
  isColorPicking = false;
  if (isErasing) {
    eraserBtn.style.opacity = 0.1;
    rainbowBtn.style.opacity = 1;
  } else {
    eraserBtn.style.opacity = 1;
  }
});

let isRainbow = true;
const rainbowBtn = document.querySelector("#btn-rainbow");
rainbowBtn.addEventListener("click", () => {
  isRainbow = true;
  isErasing = false;
  if (isRainbow) {
    eraserBtn.style.opacity = 1;
    colorPicker.style.opacity = 1;
    rainbowBtn.style.opacity = 0.1;
  }
});

let isColorPicking = false;
let colorValue;
const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("input", (event) => {
  isColorPicking = true;
  isRainbow = false;
  colorValue = event.target.value;
  eraserBtn.style.opacity = 1;
  colorPicker.style.opacity = 1;
});

const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".container > div");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
    box.style.opacity = 0.1;
  });
});

const changeGridBtn = document.querySelector("#btn-change-grid");
let isGridOn = false;
changeGridBtn.addEventListener("click", () => {
  if (!isGridOn) {
    isGridOn = true;
  } else {
    isGridOn = false;
  }

  const boxes = document.querySelectorAll(".container > div");
  if (isGridOn) {
    boxes.forEach((box) => {
      box.style.border = "1px solid black";
    });
  } else {
    boxes.forEach((box) => {
      box.style.border = "none";
    });
  }
});

function drawBox() {
  const boxes = document.querySelectorAll(".container > div");
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", (event) => {
      // If mouse is being pressed
      if (event.buttons === 1) {
        if (!isErasing && isRainbow) {
          event.target.style.backgroundColor = getRandomColor();
          event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
        } else if (isColorPicking) {
          event.target.style.backgroundColor = colorValue;
          event.target.style.opacity = 1;
        } else {
          event.target.style.backgroundColor = "white";
          event.target.style.opacity = 0;
        }
      }
    });
  });
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green}, ${blue})`;
  return rgb;
}

function init() {
  createGrid(16);
  drawBox();
}

init();
