Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  let resArr = [];

  for (let i = 0; i < this.length; i++) {
    resArr.push(callback(this[i]));
  }

  return resArr;
};

Array.prototype.myReduce = function (callback) {
  let acc = 0;

  for (let i = 0; i < this.length; i++) {
    acc += callback(this[i]);
  }

  return acc;
};
