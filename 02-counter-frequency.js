/*
Frequency Problem

Write a function that takes two strings and check if they have same letters.
Order doesn't matter.

ex.
sameFrequency('aabc', 'abbc') // false
sameFrequency('abba', 'abab') // true
sameFrequency('aaskfurn', 'adfeekql') // false
*/

function sameFrequency(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter = {};
  countLetter(str1, 'str1');
  countLetter(str2, 'str2');
  function countLetter(str, strName) {
    for (let i = 0; i < str.length; i++) {
      if (counter[str[i]]) {
        if (counter[str[i]][strName]) {
          counter[str[i]][strName]++;
        } else {
          counter[str[i]][strName] = 1;
        }
      } else {
        counter[str[i]] = {[strName]: 1};
      }
    }
  }

  return Object.entries(counter).every(([letter, set]) => {
    return set.str1  === set.str2;
  });
}

// technique: counter
// complexity: O(n)