let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellclick));
document.getElementById('reset').addEventListener('click', resetGame);

function handleCellClick(event) {
     const clickedCell = event.target;
     const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

     if (board[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    if (checkwin()) {
       document.getElementById('message').innerHTML = 'Player ${currentPlayer} wins!';
       gameActive = false;
    } else if (board.includes("")) {
       currentPlayer = currentPlayer === "x" ? "0": "x";
    } else {
       document.getElementById('message').innerHTML = "It's a draw!";
       gameActive = false;
    }
}
function checkwin() {
    return winningConditions.some(condition => {
       return condition.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    document.getElementById('message').innerHTML = "";
}