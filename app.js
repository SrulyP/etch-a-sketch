// ============================== // Initial and Global Values //  ============================== //

let value = 16;
const gridHeight = 500;
let mode = "color";
let hexColor;

let grid = document.querySelector(".grid");
const sizeButton = document.querySelector(".sizeButton");
const colorButton = document.querySelector(".colorButton");
const grayButton = document.querySelector(".grayButton");
const resetButton = document.querySelector(".resetButton");
const container = document.querySelector(".container");


// ============================== // Buttons // ============================== //

// ----------- Change Size Button -----------

sizeButton.addEventListener("click", () => {
    value = 0;
    while (value > 100 || value < 16) {
        value = Number(prompt("Input the number of squares per side for the new grid (16 - 100): "));
    }
    resetGrid(value);
});


// ----------- Change to Color Mode Button -----------

colorButton.addEventListener("click", () => {
    mode = "color";
    resetGrid(value, mode);
});


// ----------- Change to Grayscale Mode Button -----------

grayButton.addEventListener("click", () => {
    mode = "gray";
    resetGrid(value, mode);
});


// ----------- Reset Grid Button -----------

resetButton.addEventListener("click", () => {
    resetGrid(value, mode);
});


// ============================== // Functions // ============================== //

// ----------------- Reset Grid Function -----------------

function resetGrid(value){
    // Remove the current grid and create a new one
    container.removeChild(grid);
    grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    container.appendChild(grid);


    let x = value;
    let y = value;
    let squareHeight = gridHeight/x;

    let styles = `height: ${squareHeight}px; width: ${squareHeight}px;`

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++){
            const gridPiece = document.createElement("div");

            gridPiece.setAttribute("class", "grid-piece");
            gridPiece.setAttribute("style", styles);
            gridPiece.addEventListener('mouseover', () => {
                if (mode == "gray") {
                    increaseOpacity(gridPiece);
                }
                else {
                    randomColors(gridPiece);
                }
            });
            grid.appendChild(gridPiece);
        }   
    }
}
resetGrid(value);


// ----------------- Increase Opacity Function -----------------

function increaseOpacity(gridPiece) {
    gridPiece.style.backgroundColor = "#000000";
    gridPiece.style.opacity = 0;
    let opacity = parseFloat(gridPiece.style.opacity);
    gridPiece.style.opacity = opacity + 0.1;
}


// ----------------- Random Colors Function -----------------

function randomColors(gridPiece) {
    hexColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    gridPiece.style.backgroundColor = hexColor;
}
