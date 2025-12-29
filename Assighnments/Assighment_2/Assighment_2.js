console.log("#".repeat(30));
console.log(
  "%cSet Data Type And Methods|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let friendsSet = new Set(myFriends);

console.log([...friendsSet].sort());

// Needed Output : ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
