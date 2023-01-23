/*
Min Subarray Length

Write a function called minSubLength which accepts two parameters,
an array of positive integers and a positive integer.
This function should return the minimal length of a continuous
subarray - the sum if elements inside this subarray has to
be greater than or equal to the positive integer parameter.
If subarray not found, then return 0.

ex.
minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11); // 2
*/

function minSubLength(arr, target) {
  let curMinLength = 0;
  if (!arr.length) {return curMinLength;}
  let left = 0;
  let right = 0;
  let subLength = 0;
  let curSubSum = 0;

  for(let i = 0; i < arr.length; i++) {
    right = i;
    curSubSum += arr[right];
    subLength++;
    if (curSubSum >= target) {
      if (curMinLength === 0) {
        curMinLength = subLength;  // The first time finding target sum
      } else if (subLength < curMinLength) {
        curMinLength = subLength;
        if (curMinLength === 1) {return curMinLength;}
      } else {
        shrinkWindowFromLeft();
      }
    }
  }
  return curMinLength;

  function shrinkWindowFromLeft() {
    for(let j = left; j < right; j++) {
      curSubSum -= arr[j];
      subLength--;
      left++;
      if (curSubSum >= target) {
        subLength < curMinLength && (curMinLength = subLength);
      } else {
        return;
      }
    }
  }
}

// technique: pointer + sliding window
// complexity: O(n)