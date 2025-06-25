const container = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        const gridPiece = document.createElement("div");

        gridPiece.setAttribute("class", "grid-piece");
        gridPiece.setAttribute("style", "width: 20px; height: 20px;");
        container.appendChild(gridPiece);
    }   
}


container.addEventListener('mousemove', (e) => {
    
});