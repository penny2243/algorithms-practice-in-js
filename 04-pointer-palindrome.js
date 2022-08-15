/*
Palindrome 迴文

Write a function that checks if a given string is a palindrome.
Palindrome is a word that reads the same backward as forward.

ex.
isPalindrome('racecar'); // true
isPalindrome('tacocat'); // true
isPalindrome('hello'); // false
isPalindrome('foofar'); // false
*/

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// technique: pointer
// complexity: O(n)