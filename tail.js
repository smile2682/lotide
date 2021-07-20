const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😅😅 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(10, 71);
// assertEqual("Bootcamp", "Bootcamp")

// Test Case: Check the original array
//array with one value
const words = ["Yo Yo"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length); // original array should still have 3 elements!
console.log(tail(words));

//empty array
const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 0); // original array should still have 3 elements!
console.log(tail(words));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail(words))

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
