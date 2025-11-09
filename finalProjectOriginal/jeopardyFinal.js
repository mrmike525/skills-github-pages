const API_URL = "https://rithm-jeopardy.herokuapp.com/api/";
const NUMBER_OF_CATEGORIES = 100;
const NUMBER_OF_CLUES_PER_CATEGORY = 5;

let categories = [];

let activeClue = null;
let activeClueMode = 0;

let isPlayButtonClickable = true;

$("#play").on("click", handleClickOfPlay);

setupTheGame();

function handleClickOfPlay() {}

async function setupTheGame() {
  const categoryIds = await getCategoryIds();
  console.log("Category IDs:", categoryIds);

  const firstId = categoryIds;
  for (let x = 0; x < firstId.length; x++) {
    firstId[x];
    console.log(firstId[x]);
    const categoryData = await getCategoryData(firstId[`${x}`]);
    console.log("category data", categoryData);
    categories.push(categoryData);
  }

  for (let i = 0; i < 6; i++) {
    fillTable(categories[i].title);
  }

  const question = document.querySelectorAll("td");
  for (questions of question) {
    // let { , second[clues]} = categories
    questions.innerText = `${categories[1].clues[0].question}`;
  }
  console.log(categories[0].clues[0].question);
  console.log(categories);
  let [first, second, third, fourth, fifth, sixth] = categories;
  console.log(second);
}

const question = document.querySelectorAll("clues");

async function getCategoryIds() {
  let res = await axios.get(
    `${API_URL}categories?count=${NUMBER_OF_CATEGORIES}`
  );
  // categories = await res.data.map(ids => ids)

  return res.data.map((ids) => ids.id);
}

async function getCategoryData(categoryId) {
  const categoryWithClues =
    await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?
id=${categoryId}`);
  return categoryWithClues.data;
}

function fillTable(categories) {
  const categorieHeader = document.getElementById("categories");
  const tableHeadCategorie = document.createElement("th");
  tableHeadCategorie.innerText = categories;
  categorieHeader.append(tableHeadCategorie);
  const clues = document.getElementById("clues");

  const tableData = document.createElement("td");
  for (let x = 0; x < 30; x++) {
    tableData;
    console.log(x);
    clues.append(tableData);
  }
  // tableData.innerText = categories;
  // clues.append(tableData);
}

$(".clue").on("click", handleClickOfClue);

function handleClickOfClue(event) {}

$("#active-clue").on("click", handleClickOfActiveClue);

function handleClickOfActiveClue(event) {
  if (activeClueMode === 1) {
    activeClueMode = 2;
    $("#active-clue").html(activeClue.answer);
  } else if (activeClueMode === 2) {
    activeClueMode = 0;
    $("#active-clue").html(null);

    if (categories.length === 0) {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html("The End!");
    }
  }
}

let fish = "xray";
