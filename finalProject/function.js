let getCategoriesButton = document.getElementById('getCategories');
const selectOptions = document.getElementById('selectOptions');
const displayCategories = document.getElementById('displayCategories');

selectOptions.addEventListener('click', async function(event){
    event.preventDefault();
    if(event.target.id === "getCategories") {
        const categories = await getData();
        displayCategories.innerText = categories;
        
    }
    console.log(event.target)
})



async function getData() {
  try {
const categoryResponse = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?
count=100`);

let categoryTitleAndId = [];
for(let categories of categoryResponse.data) {
   categoryTitleAndId.push(`${categories.title}`);
   console.log(categories);
   
  }
  console.log(categoryTitleAndId);
  return categoryTitleAndId
} catch (err) {
  console.error('Error', err);
    }
}

function createLists() {
    getData();
const ulElement = document.createElement("ul");
  categoryTitleAndId.forEach(category => {
    const liElement = document.createElement("li");
    liElement.textContent = category;
    ulElement.appendChild(liElement);
  });
  displayCategories.appendChild(ulElement);
}

function add(num1, num2){
    return num1 + num2
}

console.log(add(12, 3));

let categories = getData;

async function specificCategory(id){
const specificCategory = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?id=${id}`)
console.log(specificCategory.data)
return specificCategory.data
}

let call = specificCategory;

let on = false;
let phrase = "That's the way the cookie crumbles."

function check(string){
    if(phrase.indexOf(string.toLowerCase()) !== -1) {
        console.log("This string is sweet!")
        console.log(phrase.indexOf(string.toLowerCase()))
    } else {
        console.log("Go Fish")
    }
}


let toggleOne = false;

function toggle(){
  if(toggleOne === false){
    toggleOne = true;
    console.log(toggleOne)
  } else if (toggleOne === true){
    toggleOne = false;
    console.log(toggleOne)
  } 
  message()
}

function message(){
  if(toggleOne === true){
    console.log('WELL NOW I"M YELLING!!')
  } else {
    console.log("now i'm whispering")
  }
}
