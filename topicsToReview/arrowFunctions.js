// arrow functions = a concise way to write function expressions good for simple functions that you use only once
// (parameters) => some code

function hello(message) {
  const help = "Help Me!";
  console.log("Hello");
  console.log(message);

  function goodbye() {
    console.log(help);
  }
}

const p = () => hello();
