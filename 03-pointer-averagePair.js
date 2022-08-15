/*
Average Pair

Write a function that given a sorted array of integers and a number.
Find if there's any pair in the array that has average of the given number.
Find all of them. There might be multiple pairs fit the condition.

ex.
averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
// [[-11, 14], [0, 3], [1, 2]]
*/

function averagePair(arr, target) {
  if (!arr.length) {
    return [];
  }
  let result = [];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (avg < target) {
      left++;
    } else {
      right--;
    }

  }
  return result;
}

// technique: pointer
// complexity: O(n)