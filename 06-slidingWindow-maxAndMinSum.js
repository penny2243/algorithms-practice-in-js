/*
Max and Min Sum

Write two functions that calculate the max and min sum of
n consecutive numbers in an array.

ex.
maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // // -28
*/

function maxSum(numArr, windowSize) {
  let result = -Infinity;
  let windowStart = 0;
  let windowEnd = windowSize;
  if (windowSize === 0 || windowSize > numArr.length) {
    return null;
  }
  while(windowEnd <= numArr.length) {
    let window = numArr.slice(windowStart, windowEnd);
    let windowSum = window.reduce((acc, cur)=> acc + cur, 0);
    if (typeof result === 'undefined' || windowSum > result) {
      result = windowSum;
    }
    windowStart++;
    windowEnd++;
  }
  return result;
}

function minSum(numArr, windowSize) {
  let result = Infinity;
  if (windowSize === 0 || windowSize > numArr.length) {
    return null;
  }
  for(let i = 0; i <= numArr.length - windowSize; i++) {
    let windowSum = 0;
    for(let j = i; j < i + windowSize; j++) {
      windowSum += numArr[j];
    }
    if(windowSum < result) {
      result = windowSum;
    }
  }
  return result;
}

// technique: sliding window
// complexity: O(n)
