// Instructions
// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

// Pseudo code:
// Use divide and conquer method
// keep splitting array till its small enough to solve
// if array has only one element its already sorted
// sort the left half of the array
// sort the right half of the array
// merge them back into their original array

const mergeSort = (array) => {
  if (array.length <= 1) return;

  const midPoint = Math.ceil(array.length / 2);
  const leftHalf = array.slice(0, midPoint);
  const rightHalf = array.slice(midPoint);

  // testing output
  console.log(`Left half: ${leftHalf}`);
  console.log(`Right half: ${rightHalf}`);

  mergeSort(leftHalf);
  mergeSort(rightHalf);
};

mergeSort([3, 5, 7, 15, 1, 4, 20]);
