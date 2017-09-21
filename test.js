function startGame() {
  turnCount = 1;

  function makeTurn(turnCount) {
    gameSequence = generateGameSequence(count);
    presentGameSequence(gameSequence);
    playerResponse = getPlayerResponse();
    evaluateResponse(gameSequence, playerResponse);
    makeTurn(turnCount+1);
  }
}


//github
    const colors = {0:'green', 1:'red', 2:'yellow', 3:'blue'};
    const colorHighlights = {'green':'#8CD538', 'red':'#f3462c', 'yellow':'#fdf04f', 'blue':'#0ab3fb'};
    const trueColors = {'green':'#629935', 'red':'#be332a', 'yellow':'#e2d445', 'blue':'#0274a5'}
    let gameSequence = [];
    let turnCount;
    let gameOver = false;

    function startGame() {
      turnCount = 1;
      makeTurn(turnCount);
    }

    function makeTurn(count) {
      if (gameOver) {
        setTimeout(() => {console.log('game over')}, 3000*count);
      } else if (count == 7) {
        gameOver = true;
      } else {
        setTimeout(() => {
          gameSequence = generateGameSequence(count);
          console.log(gameSequence+' '+count);
          presentGameSequence(gameSequence);
        }, 3000*count);
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
    //blinks the color button
    function presentColor(color) {
      let colorButton = document.getElementById(color);
      colorButton.style.background = colorHighlights[color];
      setTimeout(() => {colorButton.style.background = trueColors[color]}, 750);
    }
