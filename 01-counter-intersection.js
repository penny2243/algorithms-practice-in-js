/*
Intersection Problem

Write a function that takes two arrays as parameters,
and the return an array that is the intersection of these two arrays.
For example, intersection([1,2,3], [5,16,1,3]) should return [1,3].

ex.
intersection([15,3,6,8,24,16], [11,3,9,6,15,8])  // [3,6,8,15]
*/

function intersection(arr1, arr2) {
  if (!arr1.length || !arr2.length) {
    return [];
  }
  let counter = {};
  let result = [];
  count(arr1);
  count(arr2);

  return result;
  function count(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!counter[arr[i]]) {
        counter[arr[i]] = 1;
      } else {
        counter[arr[i]]++;
        if (counter[arr[i]] === 2) {
          result.push(arr[i]);
        }
      }
    }
  }
}

// technique: counter
// complexity: O(n)