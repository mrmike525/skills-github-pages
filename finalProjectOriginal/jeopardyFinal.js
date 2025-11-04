const API_URL = "https://rithm-jeopardy.herokuapp.com/api/"; 
const NUMBER_OF_CATEGORIES = 100; 
const NUMBER_OF_CLUES_PER_CATEGORY = 5; 

let categories = []; 


let activeClue = null; 
let activeClueMode = 0; 

let isPlayButtonClickable = true; 

$("#play").on("click", handleClickOfPlay);


function handleClickOfPlay ()
{
  
}


async function setupTheGame ()
{
 
}


async function getCategoryIds ()
{
 
let res = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?
count=${NUMBER_OF_CATEGORIES}`)
const ids = [];
for(let x = 0; x < res.data.length; x++){
    // console.log(res.data[x].id, res.data[x].title, )
    ids = ids + res.data[x]
}
//  const ids =  await res.data[0].id; 
//  console.log(res.data)
//  console.log(ids)

  return ids;
}


async function getCategoryData (categoryId)
{
  const categoryWithClues = {
    id: categoryId,
    title: undefined, 
    clues: [] 
  };



  return categoryWithClues;
}


function fillTable (categories)
{
  
}

$(".clue").on("click", handleClickOfClue);


function handleClickOfClue (event)
{
  
}

$("#active-clue").on("click", handleClickOfActiveClue);


function handleClickOfActiveClue (event)
{
  

  if (activeClueMode === 1)
  {
    activeClueMode = 2;
    $("#active-clue").html(activeClue.answer);
  }
  else if (activeClueMode === 2)
  {
    activeClueMode = 0;
    $("#active-clue").html(null);

    if (categories.length === 0)
    {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html("The End!");
    }
  }
}