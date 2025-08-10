let imemeButton = document.getElementById('submit');
let topTextInput = document.getElementById('topText');
let bottomTextInput = document.getElementById('bottomText');
let toMeme = document.getElementById('toMeme');
let imeme = document.querySelector('#image').value;
let listener = document.getElementById('listener');


imemeButton.addEventListener('click', function(event){
event.preventDefault();
if(document.querySelector('#image').value === "") {
alert
(
'Please add a link to an Image in the "Image Link" box. \nOnce you find an image, you can right click in your browser and click `copy image link` then right click to copy & paste that into the input box. The other fields are optional.'
);
return;
} else {
let topValue = topTextInput.value;
let bottomValue = bottomTextInput.value;
const newDiv = document.createElement('div');
toMeme.append(newDiv);
newDiv.setAttribute("class", "placedDiv");
newDiv.innerHTML = imgString();

const createH3Top = document.createElement('h3');
newDiv.append(createH3Top);
createH3Top.innerText = `${topValue}`;
createH3Top.id = "topH3"

const createH3Bottom = document.createElement('h3')
newDiv.append(createH3Bottom);
createH3Bottom.innerText = `${bottomValue}`;
createH3Bottom.id = "bottomH3";

topTextInput.value = "";
bottomTextInput.value = "";
document.querySelector('#image').value = "";
}});

function imgString () {
    let imeme = document.querySelector('#image').value;
    let imgString = `<img src="${imeme}" alt="imeme">`;
    return imgString;
};

listener.addEventListener('dblclick', function (event){
    console.log(event.target.tagName)
    if(event.target.tagName === 'IMG' ) {
        event.target.parentElement.remove();
    };
    if(event.target.tagName === 'H3') {
        event.target.remove();
    };
});
