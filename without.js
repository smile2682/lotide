const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length){
  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false
    } 

  }return true;
}return false;
}
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual,expected)) 
  {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`😅😅 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const without = function (arr1, arr2) {
  let newArr = arr1.slice(0)
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j< newArr.length;j++) {
      if (arr2[i]===newArr[j]){
        // remove newArr[j],no new pushing
        newArr.splice(j,1)
      }
    }
  }return newArr;
}


// console.log(without([1, 2, 3], [1]) )// => [2, 3]
// assertArraysEqual(without([1, 2, 3], [2,3]),[1])

// console.log(without(["1", "2", "3"], [1, 2,"3"])) // => ["1", "2"]
// assertArraysEqual(without(["1", "2", "3"], [1, 2,"3"]),["1","2"])
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log (words)

