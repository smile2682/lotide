const assertArraysEqual = require ('../assertArraysEqual').assertArraysEqual
const eqArrays = require ('../assertArraysEqual').eqArrays

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS