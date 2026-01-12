const tacos = [
  {
    meat: "beef",
    vegetables: "lettuce, tomatoes, red onions",
  },
  {
    meat: "chicken",
    vegetables: "brocolli, oranges, peas",
  },
];

let meat = tacos.map(function (key) {
  return { Meat: [key.meat], Veges: [key.vegetables] };
});

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

mathFuncs = [add, subtract, multiply, divide, power];

function doMath(a, b, mathFunc) {
  return mathFunc(a, b);
}

function power(x, y) {
  return x ** y;
}

function doAllMath(a, b, mathFuncs) {
  for (let func of mathFuncs) {
    console.log(func(a, b));
  }
}
