let h1 = document.querySelector('h1')

// h1.innerText = h1.innerText.toUpperCase()

h1.addEventListener('click', function(event){
    let lowerCase = h1.innerText.toLowerCase();
    if(h1.innerText === lowerCase){
        h1.innerText = h1.innerText.toUpperCase();
    }
}) 