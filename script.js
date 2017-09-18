
const buttons = document.querySelectorAll('.button');
const strictMode = document.querySelector('button');
const controls = document.querySelector('.gameControl');
const colors = {0:'green', 1:'red', 2:'yellow', 3:'blue'};
let playerResponse;
let gameSequence;
let turnCount;
let strict = false;


//FUNCTION DECLRATIONS:

function startGame() {
  turnCount = 4;
  gameSequence = [];
  playerResponse = [];
  //generate new game sequence for this turn.
  generateGameSequence(turnCount, gameSequence);
  //gather players button sequence.
  buttons.forEach((button) => {
    button.addEventListener('click', turnClick);
  });
  console.log(gameSequence);
}

//evaluate current game state.
function evaluateState(value) {                               // <--------!!! add else statement
  if (gameSequence[playerResponse.length] !== value) return false;
}

function turnClick(button) {                                     // <--------!!! clean console.log('false')
  let targetValue = button.target.id.toString();
  (evaluateState(targetValue) == false)? console.log('false') : playerResponse.push(targetValue);
  console.log(playerResponse);
}

function generateGameSequence(count, sequenceArray) {
  for (var i=0; i<count; i++) {
    var randNum = Math.floor(Math.random()*4);
    sequenceArray.push(colors[randNum]);
  }
}




//FUNCTION INITIATION:
strictMode.addEventListener("click", function(){
    if(this.innerText === 'OFF') {
      this.innerText = 'ON';
      this.style.background = '#ec2a1d';
    } else {
      this.innerText = 'OFF';
      this.style.background = '#6faf3b';
    }
});

startGame();
