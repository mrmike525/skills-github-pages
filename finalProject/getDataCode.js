async function getData() {
  try {
const categoryResponse = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?
count=25`);
const specificCategory = await axios.get ("https://rithm-jeopardy.herokuapp.com/api/category?id=3")

for(let categories of categoryResponse.data) {
  console.log(categories.title, categories.id);
  };
  console.log(specificCategory.data)
} catch (err) {
  console.error('Error', err);
}
}