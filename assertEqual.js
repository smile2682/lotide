const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😅😅 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function (arr1, arr2) {
  let result = []
  let final = ''
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] === arr2[i]) {
      result.push(true)
    } else { result.push(false) }

  }
  // console.log(result);
  for (let i = 1; i < result.length; i++) {
    if (result[i] === result[i - 1]) {
      final = true
    } else { final = false }
  }
  return final
  console.log(final)
}
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
// test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
