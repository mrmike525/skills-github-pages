// Starter code
const numbers = [2, 102, 324, 493, 598, 29482, 3, 6, 29, 184, 5, 10, 111]

// your code goes below
// ...

let lessThanTen = []
numbers.forEach(function(value) {
	console.log(value);
    if(value < 10){
      lessThanTen.push(value); 
    }
});

const elementSpace = document.querySelector('h1')
let x = JSON.stringify(lessThanTen)
let createH2 = document.createElement('h2')
createH2.innerText = x;
elementSpace.append(createH2)