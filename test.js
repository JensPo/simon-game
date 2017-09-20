function startGame() {
  turnCount = 1;

  function makeTurn(turnCount) {
    gameSequence = generateGameSequence(count);
    presentGameSequence(gameSequence);
    playerResponse = getPlayerResponse();
    evaluateResponse(gameSequence, playerResponse);
    count +=1;
  }
}
