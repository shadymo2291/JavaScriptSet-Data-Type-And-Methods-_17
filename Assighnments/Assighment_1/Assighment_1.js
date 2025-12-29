console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_1

let setOfNumbers = new Set([10]);

setOfNumbers.add(20);

setOfNumbers.add(setOfNumbers.size);

console.log(setOfNumbers);
console.log([...setOfNumbers][2]);
