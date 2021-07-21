const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false
    } 

  }return true;
}
const assertEqual = function (actual, expected) {
  if (eqArrays(actual,expected)) 
  {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😅😅 Assertion Failed: ${actual} !== ${expected}`);
  }
};


  
assertEqual([1, 2, 3], [1, 2, 3]) // => true
assertEqual([1, 2, 3], [3, 2, 1]) // => false

assertEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(["1", "2", "3"], ["1", "2", 3]) // => false
// // test code
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS