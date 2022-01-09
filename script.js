
let gridSize = 16;
let randomRed = Math.floor(Math.random() * 255);
let randomGreen = Math.floor(Math.random() * 255);
let randomBlue = Math.floor(Math.random() * 255);

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

// function drawBox(e) {
//     e.target.classList.add('box-drawn');
// }

function addDrawBoxEvent() {
    box = document.querySelectorAll(".box");
    Array.from(box).forEach(element => {
        let transparency = 0.2;
        element.addEventListener('mouseover', e => {
            e.target.style.background = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${transparency})`;
            transparency += 0.2;
        });
    }); 
}

// create grid
// gridContainer = document.querySelector(".grid-container");
// for(let i = 0; i < (gridSize * 2 + 1); i++) {
//     box = document.createElement("div");
//     box.classList.add('box');
//     box.style.width = `${boxSize}em`;
//     box.style.height = `${boxSize}em`;
//     container.appendChild(box);
// }


gridContainer = document.querySelector(".grid-container");
buildGrid(gridSize);
addDrawBoxEvent();
btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    do {
        gridSize = prompt("Enter new grid size here:");
    } while (gridSize > 100);
    buildGrid(gridSize);
    randomRed = Math.floor(Math.random() * 255);
    randomGreen = Math.floor(Math.random() * 255);
    randomBlue = Math.floor(Math.random() * 255);
    addDrawBoxEvent();
});


