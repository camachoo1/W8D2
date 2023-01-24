Array.prototype.bubbleSort = function (callback) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substring = function () {
  let res = [];
  let letters = this.split('');

  for (let i = 0; i < letters.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (j >= 1) {
        let temp = letters.slice(i, j + 1);
        res.push([temp.join('')]);
      }
    }
  }
  return res;
};
