let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

async function cleanTheDishes() {
  const message = "I am cleaning the dishes";
  return message;
}

cleanTheDishes().then((message) => {
  console.log("POOP");
});

async function add(x, y) {
  let z = x + y;
  console.log(z);
  return z;
}

let z = add(7, 7);

console.log(z + 4);

z.then((result) => {
  console.log(result + 4);
});
