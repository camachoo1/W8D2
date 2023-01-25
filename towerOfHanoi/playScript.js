const Game = require('./game.js');
// import Game from './game.js';
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let game = new Game();

const cb = () => {
  reader.question('Want to play again? Yes or No: ', (restart) => {
    if (restart === 'y') {
      game = new Game();
      // game.run(reader, cb);
    } else {
      reader.close();
    }
  });
};

game.run(reader, cb);
