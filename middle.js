const assertArraysEqual = require ('./assertArraysEqual').assertArraysEqual

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

module.exports = {middle, assertArraysEqual};
