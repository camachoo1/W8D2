class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, cb) {
    this.print;
    reader.question('Enter a start point:', (start) => {
      const startTowerIdx = parseInt(start);
      reader.question('Enter a end point:', (end) => {
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

  run(reader, completeCallback) {
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      if (!this.move(startTowerIdx, endTowerIdx))
        console.log('Invalid move!');

      if (!this.isWon()) {
        this.print();
        this.run(reader, completeCallback);
      } else {
        this.print();
        console.log('You win!');
        completeCallback();
      }
    });
  }
}

// export default Game;
module.exports = Game;
