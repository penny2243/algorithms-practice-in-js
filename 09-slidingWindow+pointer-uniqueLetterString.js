/*
Unique Letter String

Write a function called uniqueLetterString, which accepts a string and
returns the length of the longest substring with all distinct characters.

ex.
uniqueLetterString("thisishowwedoit"); // 6
uniqueLetterString("abcaefghi"); // 8
*/

function uniqueLetterString(str) {
  const counter = {};
  let curLen = 0;
  let longest = 0;
  let left = 0;
  let right = 0
  for (; right < str.length; right++) {
    curLen++;
    if (counter[str[right]] === 1) {
      shrinkWindow(left, right, str[right]);
      counter[str[right]]++;
    } else {
      counter[str[right]] = 1;
    }
    curLen > longest && (longest = curLen);
  }
  return longest;

  function shrinkWindow(start, end, duplicatedLetter) {
    for (let i = start; i < end; i++) {
      counter[str[i]]--;
      curLen--;
      if (counter[duplicatedLetter] === 0) {
        left = i + 1;
        return;
      }
    }
  }
}

function uniqueLetterString(str) {
  let left = 0;
  let right = 0;
  let longest = 0;
  const counter = {};
  while (right < str.length) {
    if (counter[str[right]]) {
      counter[str[left]]--;
      left++;
    } else {
      counter[str[right]] = 1;
      right++;
      if (right - left > longest) {
        longest = right - left;
      }
    }
  }
  return longest;
}

// technique: sliding window + counter
// complexity: O(n)