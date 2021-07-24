const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😅😅 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  let result = undefined;
  // used for-of to loop over array of key of obj
  for (let key of Object.keys(obj)) {
    // here use for-in is much eariser
    // for (let key in obj) {
    if (obj[key] === value) {
      result = key;
    }
  } return result
}

// const findKeyByValue = function(object, keyValue) {
//   let result;
//   for (let key of Object.keys(object)) {

//     if (object[key] === keyValue) {
//        return key
//     } 
//   }
//   return result;
// };
//   return key
// }


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
