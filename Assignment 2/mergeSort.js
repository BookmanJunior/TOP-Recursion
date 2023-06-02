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
  // console.log(`Left half: ${leftHalf}`);
  // console.log(`Right half: ${rightHalf}`);

  mergeSort(leftHalf);
  mergeSort(rightHalf);
};

mergeSort([3, 5, 7, 15, 1, 4, 20]);

// helper function

// pseudo code:
// take three arguments: left half, right half and the original array.
// use three variables to keep track of left half, right half and the array.
// keep loop going until numbers in either left half or right half end
// if left half is less than right half, add it back to the original list
// increment left half and the original array.
// else increment right half and the original array.
// check for remaining numbers in left half and right half.

const merge = (leftHalf, rightHalf, array) => {
  const i = 0;
  const j = 0;
  const k = 0;
};
