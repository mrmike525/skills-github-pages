let h1 = document.querySelector('h1')

// h1.innerText = h1.innerText.toUpperCase()

h1.addEventListener('click', function(event){
    let lowerCase = h1.innerText.toLowerCase();
    if(h1.innerText === lowerCase){
        h1.innerText = h1.innerText.toUpperCase();
    }
}) 

const names = ['bobby', 'timmy', 'abby', 'stephanie', 'dustin'];

console.log(names.map((upperCase) => upperCase.toUpperCase()));

let x = Array.of('taco', 'chili', 'beef')
x = x.map((upperCase) => upperCase.toUpperCase());