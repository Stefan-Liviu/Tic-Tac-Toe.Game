const winMessageColor = document.getElementById("messageResult");
let cells = document.querySelectorAll('.cell')
cells = Array.from(cells)
let nextMove = 1;
let check = false;
let currentPlayer = 'X';
let winningSolutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    winningSolutions.forEach(function(solutions) {
        if(solutions.every(idx => cells[idx].innerText.trim() == currentPlayer)) {
           check = solutions.every(idx => cells[idx].innerText.trim() == currentPlayer);
        }
       
    });
    return check;
}

cells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        if(cell.innerText.trim() != "") {
            return
        }
        if(nextMove % 2 != 0) {
            currentPlayer = 'X';
            cell.innerText = currentPlayer;
            ++nextMove;
         } else {
             currentPlayer ='0';
             cell.innerText = currentPlayer;
             ++nextMove;
         }
         checkWinner();
         if (checkWinner()) {
             document.getElementById("messageResult").innerHTML = "Player " + currentPlayer + " won!";
             winMessageColor.style.color = "green";
         }
         if(nextMove === 10) {
             document.getElementById("messageResult").innerHTML = "It's a draw!"
             winMessageColor.style.color = "gray";
         }
    });

});