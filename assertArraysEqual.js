const eqArrays = require ('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual,expected)) 
  {
    console.log(`๐๐Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`๐๐ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
  
