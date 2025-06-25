let x = 16;
let y = 16;

const container = document.querySelector(".grid");
const changeSizeButton = document.querySelector(".sizeButton");

changeSizeButton.onclick = (e) => {
    let value = prompt("Input the number of squares per side for the new grid: ");
    x, y = value;
};

for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++){
        const gridPiece = document.createElement("div");

        gridPiece.setAttribute("class", "grid-piece");
        gridPiece.setAttribute("style", "width: 20px; height: 20px; background-color: black; opacity: 0;");
        gridPiece.addEventListener('mouseover', () => {
            increaseOpacity(gridPiece);
        });
        container.appendChild(gridPiece);
    }   
}

function increaseOpacity(gridPiece) {
    let opacity = parseFloat(gridPiece.style.opacity);
    gridPiece.style.opacity = opacity + 0.1;
}


