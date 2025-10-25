let dinner = ['tacos', 'chili', 'chicken']

for(foods of dinner){
    console.log("Dinner", foods)
    if(foods === 'tacos'){
        console.log(foods, "The Best Dinner")
    } else {
        console.log('yup')
    }
}

function Abby(){
    return "Abby I love you!"
}

const h1 = document.createElement('h1');
const body = document.body;
body.style.backgroundColor = 'orange'
body.append(h1)
h1.innerText = Abby();
h1.style.color = 'darkred'


// let table = document.createElement('table');
// body.append(table)

// let caption = document.createElement('caption');
// caption.innerText = "Jeopardy";
// table.append(caption);

// let tableHead = document.createElement('thead');
// table.append(tableHead);

// let tableRow = document.createElement('tr');
// tableHead.append(tableRow)

// let tableH1 = document.createElement('th');
// tableH1.innerText = 'Category1'
// tableRow.append(tableH1);

let clueData =[];

async function getData(categories = 6, id = 3) {
  try {
const categoryResponse = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?
count=${categories}`);
const specificCategory = await axios.get (`https://rithm-jeopardy.herokuapp.com/api/category?id=${id}`)

for(let categories of categoryResponse.data) {
  console.log(categories.title, categories.id);
  };
  console.log(specificCategory.data)
  return [specificCategory.data]
  // return responseDataCategories = categoryResponse
} catch (err) {
  console.error('Error', err);
}
}

async function main(categories, choosenCategory){
  try {
    const result = await getData(categories, choosenCategory);
    clueData.unshift(result);
  } catch (err) {
    console.error(err);
  }
}

async function init() {
await Promise.all([
main(6, 2),
main(6, 3),
main(6, 4),
main(6, 6),
main(6, 8),
main(6, 9),
])};

init();

function createElement(elementName, appendName){
    let element = document.createElement(elementName);
    appendName.append(element);
    return element;
}

function createVariableSelector(name){
    const selector = document.querySelector(name);
    console.log(selector)
    return selector;
}

let p = createVariableSelector


const table = createElement('table', p('body'));
const caption = createElement('caption', p('table'));
caption.innerText = 'Jeopardy'
const thead = createElement('thead', p('table'));


const tr = createElement('tr', p('thead'));
const thmain = createElement('th', p('tr'));

// console.log(clueData[0][0].title)





const th1 = createElement('th', p('tr'));
th1.innerText = 'Category 2';

th2 = createElement('th', p('tr'));
th2.innerText = 'Category 3';

const tbody = createElement('tbody', p('table'));
const tr2 = createElement('tr', p('tbody'));
const td = createElement('td', p('tbody tr' ));
td.innerText = 'What is the best way to do this?? HMM??? I think this is it...????!!!';

setTimeout(function() {
    thmain.innerText = clueData[0][0].title.toUpperCase();
    th1.innerText = clueData[1][0].title.toUpperCase();
    th2.innerText = clueData[2][0].title.toUpperCase();
}, 500);





