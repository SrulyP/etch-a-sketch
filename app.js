// ----------------- x ----------------- 
let value = 16;

let grid = document.querySelector(".grid");
const sizeButton = document.querySelector(".sizeButton");
const container = document.querySelector(".container");


// ----------------- Change Size Button -----------------

sizeButton.addEventListener("click", () => {
    console.log("button clicked");
    while (value > 100 || value < 16) {
        console.log("requesting val");
        value = Number(prompt("Input the number of squares per side for the new grid (16 - 100): "));
    }
    console.log("val accepted, resetting grid");
    resetGrid(value);
});


// ----------------- Reset Grid Function -----------------

function resetGrid(value){
    container.removeChild(grid);
    console.log("removed grid");
    grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    console.log("created new grid element");
    container.appendChild(grid);
    console.log("appended grid to container");


    let x = value;
    let y = value;
    let squareHeight = 320/x;
    console.log(`value = ${value}, squareHeight = ${squareHeight}`);

    let styles = `height: ${squareHeight}px; width: ${squareHeight}px; background-color: black; opacity: 0;`

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++){
            const gridPiece = document.createElement("div");

            gridPiece.setAttribute("class", "grid-piece");
            gridPiece.setAttribute("style", styles);
            gridPiece.addEventListener('mouseover', () => {
                increaseOpacity(gridPiece);
            });
            grid.appendChild(gridPiece);
        }   
    }
}
resetGrid(value);


// ----------------- Increase Opacity Function -----------------

function increaseOpacity(gridPiece) {
    let opacity = parseFloat(gridPiece.style.opacity);
    gridPiece.style.opacity = opacity + 0.1;
}

