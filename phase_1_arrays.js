Array.prototype.uniq = function () {
  let res = new Set(this);
  return Array.from(res);
};

Array.prototype.twoSum = function () {
  let pos = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pos.push([i, j]);
      }
    }
  }
  return pos;
};

Array.prototype.transpose = function () {
  let res = [];
  for (let row = 0; row < this[0].length; row++) {
    let newRow = [];
    for (let col = 0; col < this.length; col++) {
      newRow.push(this[col][row]);
    }
    res.push(newRow);
  }
  return res;
};
