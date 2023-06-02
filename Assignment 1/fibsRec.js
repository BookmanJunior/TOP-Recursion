// Instructions:
// Now write another function fibsRec which solves the same problem recursively.
// This can be done in just a couple of lines (or 1 if you’re crazy,
// but don’t consider either of these lengths a requirement… just get it done).

const fibsRec = (num, arr = [0, 1]) => {
  if (num < 0) {
    return "Please enter a whole number";
  }

  if (num < 2) {
    return num;
  }

  const nextSeq = arr.at(-1) + arr.at(-2);
  arr.push(nextSeq);
  fibsRec(num - 1, arr);
  return arr;
};

console.log(fibsRec(77));

const fibOneLiner = (num) =>
  num < 2 ? num : fibOneLiner(num - 1) + fibOneLiner(num - 2);
