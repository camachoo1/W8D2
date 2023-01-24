Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function (cb) {
  let resArr = [];

  for (let i = 0; i < this.length; i++) {
    resArr.push(cb(this[i]));
  }

  return resArr;
};

Array.prototype.myReduce = function (cb, initialVal = 0) {
  let acc = initialVal === 0 ? this.shift() : initialVal;

  this.myEach((ele) => (acc += cb(ele)));

  return acc;
};
