let mainArea = document.querySelector('#main');
let submit = document.querySelector('#submit');
let color = document.querySelector('#color');
let choiceElement = document.querySelector('#choice');
let innerText = document.querySelector('#innerText');
let fontSize = document.querySelector('#fontSize'); 
const colorMain = document.querySelector('#colorMain');
const threeSeconds = document.querySelector('#threeSeconds');
const marioSound = new Audio('https://cdn.freesound.org/previews/642/642431_14147481-lq.mp3');
const eagleSound = new Audio('https://cdn.freesound.org/previews/697/697363_4501195-lq.mp3');
const fontChoice = document.querySelector('#fontChoice')
let ul = false;
let ol = false;

submit.addEventListener('click', function(event){
    event.preventDefault();
    
    if(threeSeconds.checked === false) {
        eagleSound.play();
        createElement(choiceElement.value, innerText.value, fontChoice.value);
    } else {
        setTimeout(function() {
            createElement(choiceElement.value, innerText.value, fontChoice.value);
            marioSound.play();
        }, 3000);
    }
})


colorMain.addEventListener('input', function(event){
    mainArea.style.backgroundColor = colorMain.value;
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

function createElement(element = "", innerText = "", fontChoice = "") {
let newElement = document.createElement(element);
newElement.className = "newElement";

if(element === 'ul' || element === 'ol') {
   list(element);
   
} else if (element === "p") {
    newElement.innerText = `${innerText}`;
    newElement.style.color = color.value;
    newElement.style.fontFamily = `${fontChoice}`;
    newElement.style.fontSize = fontSize.value + 'px';
} else {
    newElement.innerText = `${innerText}`;
    newElement.style.color = color.value;
    newElement.style.fontFamily = `${fontChoice}`;
}

mainArea.append(newElement);
}


function list(li){
    let newElement = document.createElement('li');
    newElement.className = "newElement";
    newElement.innerText = `${innerText.value}`;
    newElement.style.color = color.value;
    newElement.style.fontSize = fontSize.value + 'px';
    newElement.style.fontFamily = fontChoice.value;
    if(li === 'ol'){
        if(ol === true){
            let existingOl = document.querySelector('.newElementOrdered');
            existingOl.append(newElement);
        } else {
            ol = true;
            const newOrdered = document.createElement('ol');
            newOrdered.className = 'newElementOrdered';
            mainArea.append(newOrdered);
            newOrdered.append(newElement);
        }
    }
    
    else if(li === 'ul') {
        if(ul === true){
            let existingUl = document.querySelector('.newElementUnordered');
            existingUl.append(newElement);
        } else {
            ul = true;
            const newUnordered = document.createElement('ul');
            newUnordered.className = 'newElementUnordered';
            mainArea.append(newUnordered);
            newUnordered.append(newElement);
        }

    }

}

function fontChoiceReturn(choice){
    if(choice === "passionOne"){
        return `style.fontFamily = "Passion One"`
    }
    else if(choice ==="leckerliOne"){
        return style.fontFamily = "Leckerli One"
    }
    else if (choice === "bitcountPropDouble" ){
        return style.fontFamily = "Bitcount Prop Double"

    }
    else if(choice === "bangerStatic"){
        return style.fontFamily = "Bangers"
    }
}