// Write a function to find the kth smallest element in an unsorted array without sorting the entire array.
// (Hint: Use a variation of the Quickselect algorithm.)



// Implement a function that splits an array into chunks of a given size. For example, given [1, 2, 3, 4, 5]
// and a size of 2, return [[1, 2], [3, 4], [5]]. Ensure the function handles edge cases like empty arrays
// or chunk sizes larger than the array length.

function chunks(array, size) {
  let n = array.length;
  let arr = [];
  if (n === 0 || n < size) return 0;
  for (let i = 0; i < n; i += size) {
    arr.push(array.slice(i, i + size));
  }
  return arr;
}
// console.log(chunks([1,2,3,4,5],2));
// console.log(chunks([1,2,3,4,5,6,7],3));
// console.log(chunks([1,2,3],4));

// Given an array of integers, write a function that finds the subarray with the maximum sum.
// (Hint: Use Kadane's Algorithm.)

// Function to find the maximum subarray sum
function maxSum(arr) {
  let res = arr[0];
  let current = [];
  for (let i = 0; i < arr.length; i++) {
    current = arr.slice(i, arr.length).reduce((sum, n) => sum + n, 0);
    res = Math.max(res, current);
  }
  return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
//console.log(maxSum(arr));

// Create a function that takes an array of integers and returns a new array containing only those elements
// that have a frequency greater than a given threshold.
// (For example, given [1, 2, 2, 3, 3, 3] and threshold 1, the output should be [2, 3].)

function a(arr, threshold) {
  let freq = {},
    res = [];
  for (let i of arr) {
    freq[i] == undefined ? (freq[i] = 0) : freq[i]++;
  }
  for (let i in freq) {
    freq[i] >= threshold ? res.push(+i) : null;
  }
  return res;
}

//console.log(a([1, 2, 2, 3, 3, 3],1))

// Write a function that rotates an array to the right by k positions. For example, rotating [1, 2, 3, 4, 5]
//by 2 positions results in [4, 5, 1, 2, 3].

function rotates(arr, k) {
  return arr.splice(k + 1, arr.length - 1).concat(arr);
}

//console.log(rotates([1,2,3,4,5],2));
