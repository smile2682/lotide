const eqArrays = function (arr1, arr2) {
  if(arr1.length >= arr2.length){
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
    } 
  }return true;
} else {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
  } 
}return true;
}
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual,expected)) 
  {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😅😅 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const takeUntil = function(array, callback) {
  // method 1
  // let output = [];
  // for (i=0; i<=array.length; i++ ){
  //   let number = array[i];
  //   if (callback(number)=== false)
  //   output.push(number)
  //   else{return output}
  // console.log(array.indexOf());
  // }

  //method 2
 const index = array.findIndex (callback)
//  console.log(index)
 let output = array.slice(0,index);
//  console.log(output);
 return output;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// "=== < >" are all boolean functions!
// function (x) {return x < 0}
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// the output should be:
// // [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual (results1,[ 1, 2, 5, 7, 2 ])
assertArraysEqual (results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ])