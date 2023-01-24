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

const fibbonacci = (n) => {
  return n <= 1 ? 1 : fibbonacci(n - 1) + fibbonacci(n - 2);
};
