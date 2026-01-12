const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];

const compiledUsers = users.map(function (fullName) {
  let membershipStatus = fullName.points;
  if (membershipStatus > 100) {
    membershipStatus = "Premium";
  } else {
    membershipStatus = "Standard";
  }
  console.log(membershipStatus);

  return {
    fullName: `${fullName.firstName} ${fullName.lastName}`,
    membershipStatus: `${membershipStatus}`,
  };
});

console.log(compiledUsers);

let h1 = document.querySelector("h1");
let h2 = document.createElement("h2");
h2.innerText = "Array with object inside";
h1.append(h2);
let p = document.createElement("p");
const objectAsString = JSON.stringify(compiledUsers);
p.innerText = objectAsString;
h1.append(p);

let color = document.querySelector("p");
color.style.color = "red";
color.style.width = "70%";
