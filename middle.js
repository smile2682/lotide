const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false
    } 

  }return true;
}
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual,expected)) 
  {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😅😅 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function (arr) {
  let newArr = [];
  if (arr.length <= 2) {
    newArr = [];
  } else if (arr.length % 2 === 1) {
    newArr.push(arr[(arr.length - 1) / 2])
  } else {
    newArr.push(arr[(arr.length) / 2 - 1], arr[(arr.length) / 2])
  } return newArr;
}
// }

// testcode

// For arrays with one or two elements, there is no middle. Return an empty array.

// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// // For arrays with odd number of elements, an array containing a single middle element should be returned.

// console.log(middle([1, 2, 3]))// => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]))// => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]) , [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])