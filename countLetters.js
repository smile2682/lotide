const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`๐๐Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐๐ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function (string) {
  let countEachLetter = {};
  for (letter of string) {
    if (countEachLetter[letter]) {
      countEachLetter[letter] += 1
    } else {
      countEachLetter[letter] = 1
    } 

  } 
  delete countEachLetter[' '];
  return countEachLetter
}
console.log (countLetters("lighthouse in the house"))
// const countLetters = function(word) {
//   const str = word.toLowerCase().replace(/\s/g, "");

//   const letterCount = {};
//   console.log(str);

//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i])
//     if (str[i] in letterCount) {
//       letterCount[str[i]] += 1;
//     } else {
//       letterCount[str[i]] = 1
//     }
//   }
//   return letterCount;
// }

// console.log(countLetters("Lighthouse in the house"));
assertEqual (countLetters("lighthouse in the house").l, 1)

module.exports = countLetters;