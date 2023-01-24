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

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    } else {
      return false;
    }
  }

  isWon() {
    return this.towers[2].length === 3 || this.towers[1].length === 3;
  }

  run(completeCallback) {
    this.promptMove((startTowerIdx, endTowerIdx) => {
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log('Invalid move!');
      }

      if (!this.isWon()) {
        this.run(completeCallback);
      } else {
        this.print();
        console.log('You win!');
        completeCallback();
      }
    });
  }
}
