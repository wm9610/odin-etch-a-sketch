
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

function buildGrid(gridSize) {
    gridContainer.style = `grid-template-columns: repeat(${gridSize}, minmax(0, 1fr))`;
    for(let i = 0; i < (gridSize * gridSize); i++) {
        box = document.createElement("div");
        // box.textContent = i;
        box.classList.add('box');
        // box.style.padding = `${boxSize * 0.5}em`;
        gridContainer.appendChild(box);
    }
}

buildGrid(gridSize);

btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    while(gridContainer.hasChildNodes()) {
        console.log("remove child");
        gridContainer.removeChild(gridContainer.lastChild);
    }
    do {
        gridSize = prompt("Enter new grid size here:");
    } while (gridSize > 100);
    buildGrid(gridSize);
});