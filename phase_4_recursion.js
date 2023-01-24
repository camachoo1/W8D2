function range(start, end) {
  return start === end
    ? [start]
    : start.concat(range(start + 1, end));
}

const sumRec = function (arr) {
  if (arr.length < 2) return arr[0];

  let temp = arr.shift();
  return temp + sumRec(arr);
};

function exponent(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;

  return base * exponent(base, exp - 1);
}

function fibbonacci(n) {
  if (n <= 1) return 1;

  return fibbonacci(n - 1) + fibbonacci(n - 2);
}
