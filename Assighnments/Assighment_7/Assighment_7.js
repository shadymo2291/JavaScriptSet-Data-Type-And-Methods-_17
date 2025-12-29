console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Method_1:

let theResult1 = [];

numsOne.forEach((e) => theResult1.push(e));
numsTwo.forEach((e) => theResult1.push(e));

console.log(theResult1); // [1, 2, 3, 4, 5, 6]

// Method_2:

let theResult2 = [...numsOne, ...numsTwo];

console.log(theResult2); // [1, 2, 3, 4, 5, 6]

// Method_3:

numsTwo.forEach((e) => numsOne.push(e));

console.log(numsOne); // [1, 2, 3, 4, 5, 6]

// Needed Output
// [1, 2, 3, 4, 5, 6]
