
//VARIABLES
const buttons = document.querySelectorAll('.button');
const strictMode = document.querySelector('button');
const controls = document.querySelector('.gameControl');
const colors = {0:'green', 1:'red', 2:'yellow', 3:'blue'};
const colorHighlights = {'green':'#8CD538', 'red':'#f3462c', 'yellow':'#fdf04f', 'blue':'#0ab3fb'};
const trueColors = {'green':'#629935', 'red':'#be332a', 'yellow':'#e2d445', 'blue':'#0274a5'};
let playerResponse = [];
let gameSequence = [];
let turnCount;
let strict = false;
let gameOver = false;


//FUNCTION DECLRATIONS:
function startGame() {
  turnCount = 1;
  makeTurn(turnCount);
}

function makeTurn(count) {
  if (gameOver) {
    setTimeout(() => {console.log('game over')}, 1000*count);
  } else if (count == 7) {
    gameOver = true;
  } else {
    setTimeout(() => {
      gameSequence = generateGameSequence(count);
      console.log(gameSequence+' '+count);
      //presentGameSequence(gameSequence);
    }, 1000*count);
    //presentgamesequence
    //playerResponse = getPlayerResponse
    makeTurn(count+1);
  }
}

//generate a random sequence of button values depending on turnCount.
function generateGameSequence(count) {
  return Array.from({length: count}, () => colors[Math.floor(Math.random()*4)]);
}
//presents the colors in the gameSequence on the game board.
function presentGameSequence(array) {
  array.forEach((color, i) => {
    setTimeout(presentColor.bind(null, color), 1000*i);
  })
}
//blinks the color button.
function presentColor(color) {
  let colorButton = document.getElementById(color);
  colorButton.style.background = colorHighlights[color];
  setTimeout(() => {colorButton.style.background = trueColors[color]}, 750);
}

//////////////////////////////////////////////////////////////////////////////
function turnClick(button) {
  let targetValue = button.target.id.toString();
  (evaluateState(targetValue)) ? rightQuess(targetValue) : wrongQuess(strict);
}
//evaluate current game state.
function evaluateState(value) {
  if (gameSequence[playerResponse.length] !== value) {
    return false;
  } else {
    return true;
  }      // <--------!!! add else statement
}
function rightQuess(value) {
  playerResponse.push(value)
  if (gameSequence.length === playerResponse.length) console.log('you win');
}
function wrongQuess(strict) {
  (strict) ? console.log('game over') : console.log('false'); //<------- !!!
}
//////////////////////////////////////////////////////////////////////////////

//FUNCTION INITIATION:
/*strictMode.addEventListener("click", function(){
    if(this.innerText === 'OFF') {
      this.innerText = 'ON';
      strict = true;
      this.style.background = '#ec2a1d';
    } else {
      this.innerText = 'OFF';
      strict = false;
      this.style.background = '#6faf3b';
    }
});*/

controls.addEventListener('click', function() {
  startGame();
})
