let mainArea = document.querySelector('#main')
let submit = document.querySelector('#submit')
let color = document.querySelector('#color')
let choiceElement = document.querySelector('#choice')
let innerText = document.querySelector('#innerText')
let fontSize = document.querySelector('#fontSize')
submit.addEventListener('click', function(event){
    event.preventDefault();
    createElement(choiceElement.value, innerText.value);

})


mainArea.addEventListener('dblclick', function(event) {
    console.log(event.target);
    if(event.target.tagName === 'H1' || 
        event.target.tagName === 'H2' || 
        event.target.tagName === 'H3' ||
        event.target.tagName === 'H4' || 
        event.target.tagName === 'H5' || 
        event.target.tagName === 'P' || 
        event.target.tagName === 'LI') {
        event.target.remove();
    }
})

function createElement(element = "", innerText = "") {
let newElement = document.createElement(element);
mainArea.append(newElement);
if(element === 'ul' || element === 'ol') {
    let list = document.createElement('li');
    newElement.append(list)
    list.innerText = `${innerText}`;
    list.style.color = color.value;
    list.style.fontSize = fontSize.value + 'px';
} else if (element === "p") {
     newElement.innerText = `${innerText}`;
    newElement.style.color = color.value;
    newElement.style.fontSize = fontSize.value + 'px';
} else {
newElement.innerText = `${innerText}`;
newElement.style.color = color.value;
}
}




