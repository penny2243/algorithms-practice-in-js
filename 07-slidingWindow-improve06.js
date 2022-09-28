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
  let windowSum = 0;
  if (windowSize === 0 || windowSize > numArr.length) {
    return null;
  }

  for(let i = 0; i < windowSize; i++) {
    windowSum += numArr[i];
  }

  let windowLastStart = 0;
  let windowEnd =  windowSize - 1;

  if(windowSum > result) {
    result = windowSum;
  }
  windowEnd++;

  while (windowEnd < numArr.length) {
    windowSum = windowSum - numArr[windowLastStart] + numArr[windowEnd];
    if(windowSum > result) {
      result = windowSum;
    }
    windowLastStart++;
    windowEnd++;
  }
  return result;
}

function minSum(numArr, windowSize) {
  if (windowSize === 0 || windowSize > numArr.length) {
    return null;
  }

  let windowSum = 0;
  for(let i = 0; i < windowSize; i++) {
    windowSum += numArr[i];
  }
  let result = windowSum;

  for(let j = windowSize; j < numArr.length; j++) {
    windowSum = windowSum + numArr[j] - numArr[j - windowSize];
    if (windowSum < result) {
      result = windowSum;
    }
  }

  return result;
}

// technique: sliding window
// complexity: O(n)
