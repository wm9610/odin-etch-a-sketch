

// let gridSize = prompt("Enter grid size here");
let gridSize = 16;
let boxSize = 2;

// create grid
gridContainer = document.querySelector(".grid-container");
// for(let i = 0; i < (gridSize * 2 + 1); i++) {
//     box = document.createElement("div");
//     box.classList.add('box');
//     box.style.width = `${boxSize}em`;
//     box.style.height = `${boxSize}em`;
//     container.appendChild(box);
// }

gridContainer.style = `grid-template-columns: repeat(${gridSize}, minmax(0, 1fr))`;
// gridContainer.style = `grid-auto-rows: 1fr`;

for(let i = 0; i < (gridSize * gridSize); i++) {
    box = document.createElement("div");
    // box.textContent = i;
    box.classList.add('box');
    // box.style.padding = `${boxSize * 0.5}em`;
    gridContainer.appendChild(box);
}
