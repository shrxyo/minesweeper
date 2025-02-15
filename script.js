const gameBoard = document.getElementById("game-board");

const rows = 15;
const cols = 15;

for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div"); 
    cell.classList.add("cell"); 
    cell.setAttribute("data-index", i); 
    gameBoard.appendChild(cell); 
}