console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_4

let theNumber = 100020003000;

// console.log(new Set());

let bb = [2, 0, 3, 0, 0, 4, 5];

console.log(
  parseInt(
    Array.from([...String(theNumber)], (e) => +e)
      .filter((ele) => ele > 0)
      .join("")
  )
);

// Needed Output
// 123
