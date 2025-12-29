console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_5

let theName = "Elzero";

// Method_1:

console.log(theName.split(""));

// Method_2:

console.log([...theName]);

// Method_3:

console.log([...new Set(theName)]);

// Method_4:

let newArr = [];

for (let i = 0; i < theName.length; i++) {
  newArr.push(theName[i]);
}

console.log(newArr);

// Method_5:

console.log(Array(...theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
