const tail = require('../tail');
const assertEqual = require ('../assertEqual')

// Test Case: Check the original array
//array with one value
const words1 = ["Yo Yo"];
// tail(words1); // no need to capture the return value since we are not checking it

assertEqual(words1.length,1); // original array should still have 3 elements!
// console.log(tail(words1));

//empty array
const words0 = [];
// tail(words0); // no need to capture the return value since we are not checking it
assertEqual(words0.length, 0); // original array should still have 3 elements!
// console.log(tail(words0));

const words3 = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words3); // no need to capture the return value since we are not checking it
assertEqual(words3.length, 3); // original array should still have 3 elements!
// console.log(tail(words3))

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
