/**
 * A number array: [1, 2, 3, 10, 15, 28, 32, 90, 95, 125, 189, 255, 334]
 * Find the index of the number, or return -1 if not found.
 */

function binarySearch(arr, num) {
  if (arr.length) {
    return -1;
  }

  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
}

// binary search 適用先決條件： sorted array
// complexity: O(log n)