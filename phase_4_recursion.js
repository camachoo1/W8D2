const range = (start, end) => {
  return start === end
    ? [start]
    : start.concat(range(start + 1, end));
};

const sumRec = (arr) => {
  if (arr.length < 2) return arr[0];

  let temp = arr.shift();
  return temp + sumRec(arr);
};

const exponent = (base, exp) => {
  if (exp === 0) return 1;
  return exp === 1 ? base : base * exponent(base, exp - 1);
};

const fibonacci = (n) => {
  return n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

const bsearch = (arr, target) => {
  if (arr.length === 0) return -1;

  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) return mid;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1, arr.length - 1);

  if (arr[mid] > target) {
    return bsearch(left, target);
  }
  res = bsearch(right, target);
  return !res ? -1 : res + mid + 1;
};

const cb = (left, right) => {
  if (left < right) {
    return -1;
  }
  return left > right ? 1 : 0;
};

Array.prototype.mergeSort = function (callback) {
  if (this.length <= 1) return this;

  if (typeof callback === 'undefined') {
    callback = cb;
  }

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).mergeSort(callback);
  let right = this.slice(mid).mergeSort(callback);

  return merge(left, right, callback);
};

const merge = (left, right, callback) => {
  let merged = [];

  while (left.length && right.length) {
    callback(left[0], right[0]) === -1
      ? merged.push(left.shift())
      : callback(left[0], right[0]) === 1
      ? merged.push(right.shift())
      : merged.push(right.shift());
  }

  return merged.concat(left, right);
};
