// Using iteration, write a function fibs which takes a number and
// returns an array containing that many numbers from the fibonacci sequence.
// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// pseudo-code:
// The first two numbers in fibonacci is always 0 and 1
// if the number is less than 0 throw error
// if the number is less than 2 return it
// each number is the sum of the two preceding ones
// get the last two items from the array and add them
// push result into the array

const fibs = (num) => {
  const arr = [0, 1];

  if (num < 0) {
    return "Please enter a whole number";
  }

  if (num <= 1) {
    return arr.at(num);
  }

  for (let i = 2; i < num; i++) {
    arr.push(arr.at(-1) + arr.at(-2));
  }
  return arr;
};

console.log(fibs(8));
