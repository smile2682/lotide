const assertArraysEqual = require ('../middle').assertArraysEqual;
const middle = require ('../middle').middle;

assertArraysEqual(middle([1, 2, 3, 4]) , [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])