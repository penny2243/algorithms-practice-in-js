/*
Subsequence Problem

A subsequence of a string that is formed from the original string
by deleting some (can be none) of the characters without
disturbing the relative positions of the remaining characters.

Write a function that checks if one string is a subsequence of the other string.

ex.
isSubsequence('hello', 'hello Dear'); // true
isSubsequence('book', 'brooklyn'); // true
isSubsequence('abc', 'bac'); // false (order matters)
*/

function isSubsequence(sub, string) {
  let left = 0;
  let right = string.length - 1;
  const subStart = sub[0];
  const subEnd = sub[sub.length - 1];
  while (left <= right) {
    if(subStart === string[left]) {
      let windowStr = string.slice(left, left + sub.length);
      if (sub === windowStr) {
        return true;
      }
    }
    if(subEnd === string[right]) {
      let windowStr = string.slice(right - sub.length, right + 1);
      if (sub === windowStr) {
        return true;
      }
    }
    left++;
    right--;
  };
  return false;
}

// technique: pointer
// complexity: O(n)