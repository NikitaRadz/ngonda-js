const gameScreen = document.querySelector('.game-grid');
let previousAction = [];

// previousAction.push({"squareID": 3, "icon": "bxs-moon"});
// previousAction.push({"squareID": 2, "icon": "bxs-moon"});
// previousAction.push({"squareID": 2, "icon": ""});
// console.log(previousAction.pop());
// console.log(previousAction.pop());
// console.log(previousAction.pop());
// console.log(previousAction.pop());



/**
 * Draws the game grid, with 6x6 squares.
 * Each square gets a click event listener, which toggles the moon/sun icon.
 */
const drawGameGrid = () => {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            const gameBox = document.createElement("div");
            const cellIcon = document.createElement("i");

            gameBox.classList.add("game-grid-cell");
            cellIcon.classList.add("game-cell-icon");
            cellIcon.classList.add("bx");

            gameBox.appendChild(cellIcon);
            gameBox.addEventListener("click", clickCell);
            gameScreen.appendChild(gameBox);
        }
    }
}
/**
 * Handles cell clicks in the game grid.
 * Toggles the moon/sun icon.
 * @param {Event} e The click event.
 */
const clickCell = (e) => {
    const cell = e.target.closest(".game-grid-cell");
    if (!cell) return;

    const icon = cell.querySelector(".game-cell-icon");
    if (!icon) return;
    
    if (icon.classList.contains("bxs-moon")) {
        icon.classList.remove("bxs-moon");
        icon.classList.add("bxs-sun");
    }
    else if (icon.classList.contains("bxs-sun")) {
        icon.classList.remove("bxs-sun");
    } else {
        icon.classList.add("bxs-moon");
    }
}

const newGame = () => {
    
}
drawGameGrid();