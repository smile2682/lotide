const assert = require ('chai').assert;
// const assertArraysEqual = require ('../middle').assertArraysEqual;
const middle = require ('../middle').middle;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });


it("returns [] for ['5']", () => {
  assert.deepEqual(middle(['5']), []); 
});

});
// assertArraysEqual(middle([1, 2, 3, 4]) , [2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])