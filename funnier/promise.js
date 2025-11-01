let categories;

async function getCategories(){
    const categoriesResponse = await axios.get('https://rithm-jeopardy.herokuapp.com/api/categories?count=6');


    return categoriesResponse.data;
}

getCategories().then(result => {
    categories = result;
    console.log(categories[0].title)
    console.log(categories[1].title)
    console.log(categories[2].title)
    console.log(categories[3].title)
    console.log(categories[4].title)
    console.log(categories[5].title)
});


let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if(a == 2) {
        resolve('Success')
    } else {
        reject("Failed")
    }
})

p.then((message) => {
    console.log("This is in the then " + message)
}).catch((message) => {
    console.log("This is in the catch" + message)
})


