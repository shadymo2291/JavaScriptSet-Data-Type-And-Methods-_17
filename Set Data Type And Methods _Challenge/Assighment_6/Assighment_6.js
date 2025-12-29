console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let chars = [10, 15, 6, "A", "B", "C", "D", "E"];

let theNumbers = chars.filter(function (e) {
  if (isNaN(e) === false) {
    return e;
  }
});

let theLitters = chars.filter(function (e) {
  if (isNaN(e) === true) {
    return e;
  }
});

let newLitters = theLitters.slice(0, theNumbers.length);

let theResult = [...newLitters, ...theLitters];

// console.log(theResult); // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// console.log(theResult); // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// console.log(theResult); // ['Z', 'Y', 'Z', 'Y', 'A', 'D', 'E']
console.log(theResult); // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
