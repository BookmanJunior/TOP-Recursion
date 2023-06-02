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
  return merge(leftHalf, rightHalf, array);
};

console.log(mergeSort([3, 5, 7, 15, 1, 4, 20]));

// helper function

// pseudo code:
// take three arguments: left half, right half and the original array.
// use three variables to keep track of left half, right half and the array.
// keep loop going until numbers in either left half or right half end
// if left half is less than right half, add it back to the original list
// increment left half and the original array.
// else increment right half and the original array.
// check for remaining numbers in left half and right half.

function merge(leftHalf, rightHalf, array) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      array[k++] = leftHalf[i++];
    } else {
      array[k++] = rightHalf[j++];
    }
  }

  for (; i < leftHalf.length; i++) {
    array[k++] = leftHalf[i];
  }

  for (; j < rightHalf.length; j++) {
    array[k++] = rightHalf[j];
  }

  return array;
}
