//DOMs
const winnerBoard = document.getElementById('winner');
const turn = document.getElementById('turn');
//Box
const box0 = document.getElementById('1');
const box1 = document.getElementById('2');
const box2 = document.getElementById('3');
const box3 = document.getElementById('4');
const box4 = document.getElementById('5');
const box5 = document.getElementById('6');
const box6 = document.getElementById('7');
const box7 = document.getElementById('8');
const box8 = document.getElementById('9');
const boxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
var availableBoxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
var oBox = [];
var xBox = [];
//Buttons
const start = document.getElementById('start');
//Players
const Player = (name, score) => {
  const currentScore = currentScore + score;
    return{ name, score };
}
//Wining combinations
const win = [
  [box0, box1, box2],
  [box3, box4, box5],
  [box6, box7, box8],
  [box0, box3, box6],
  [box1, box4, box7],
  [box2, box5, box8],
  [box0, box4, box8],
  [box2, box4, box6]
];
//Start game
start.onclick = () => {
  for(i = 0; i < boxes.length; i++){
    var box = boxes[i];
    box.textContent = " ";
    oBox = [];
    xBox = [];
    num = 1;
    moves();
    availableBoxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
    start.textContent = "Reset Game";
    winnerBoard.textContent = "P1: X | P2: O";
    turn.textContent = "It's player one's turn.";
  }
}
//Check for Available Moves
const availableMoves = (box) => {
  var av = availableBoxes.indexOf(box);
  availableBoxes.splice(av, 1);
}
//Moves
const moves = () => {
  var num = 1;
  document.onclick = (e) => {
    for(i = 0; i < boxes.length; i++){
      if(e.target === boxes[i] && boxes[i].textContent === " ") {
        availableMoves(boxes[i]);
        if(num % 2 === 0) {
          boxes[i].textContent = "O";
          turn.textContent = "It's player one's turn.";
          oBox.push(boxes[i]);
        } else {
          boxes[i].textContent = "X";
          turn.textContent = "It's player two's turn.";
          xBox.push(boxes[i]);
        } num++
      }
    }
    checkForWin();
  }
}
//Determining Winner
const checkForWin = () => {
  for(n = 0; n < win.length; n++) {
    if(xBox.includes(win[n][0]) && xBox.includes(win[n][1]) && xBox.includes(win[n][2])) {
      winner("Player 1");
      console.log("player1")
    } else if(oBox.includes(win[n][0]) && oBox.includes(win[n][1]) && oBox.includes(win[n][2])) {
      winner("Player 2");
      console.log("player1")
    } else if(winnerBoard.textContent === "P1: X | P2: O" && availableBoxes.length === 0 ) {
      winner("");
    }
  }
};
//Display Winner
const winner = (player) => {
  if(player === ""){
    winnerBoard.textContent = "It's a tie!";
  } else {
    winnerBoard.textContent = "Winner is " + player + "!";
  }
  turn.textContent = "";
  document.onclick = (e) => {};
};
