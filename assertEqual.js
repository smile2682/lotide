const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`๐๐Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐๐ Assertion Failed: ${actual} !== ${expected}`);
  }
};



module.exports = assertEqual;