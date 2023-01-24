class Chess {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  run() {
    // until a player is in checkmate
    // get move from current player
    // make move on board
    // switch current player
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  promptMove(cb) {
    this.print;
    prompt('Enter a start point:', (start) => {
      const startTowerIdx = parseInt(start);
      prompt('Enter a end point:', (end) => {
        const endTowerIdx = parseInt(end);
        cb(startTowerIdx, endTowerIdx);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    const startTower = this.towers[startTowerIdx];
    const endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) return false;

    if (endTower.length === 0) {
      return true;
    } else {
      const topDiscOnStart = startTower[startTower.length - 1];
      const topDiscOnEnd = endTower[endTower.length - 1];
      return topDiscOnStart < topDiscOnEnd;
    }
  }

  move(startTowerIdx, endTowerIdx) {}

  isWon() { }
  
  run(completeCallback)
}
