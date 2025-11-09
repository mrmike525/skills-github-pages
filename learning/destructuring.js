let tacoElements = {
  Meat: "Beef",
  Vegetables: ["Lettuce", "Tomatoes", "Onions", "Limes", "Cilantro"],
  Extras: ["Cheese", "Salsa"],
};

let { Meat, Vegetables } = tacoElements;

console.log(Meat, Vegetables);
let {
  Extras: [first, second],
} = tacoElements;

for (let x = 0; x < Vegetables.length; x++) {
  console.log(Vegetables[x].toUpperCase());
  const h1 = document.body.querySelector("h1");
  const paragraph = document.createElement("p");
  paragraph.innerText = Vegetables[x];
  h1.append(paragraph);
}

console.log(first);

const taco = { oranges: "Beef" };

let { oranges: Lingling } = taco;

function createTable() {
  const body = document.querySelector("body");
  const table = document.createElement("table");
  body.append(table);
  table.style.border = "2px solid black";
  const tableHead = document.createElement("thead");
  table.append(tableHead);
  const tableRow = document.createElement("tr");
  tableHead.append(tableRow);
  for (let x = 0; x < 6; x++) {
    const innerText = ["Person", "Most interest in", "Age"];
    const tableHeadShort = document.createElement("th");
    tableRow.append(tableHeadShort);
    tableHeadShort.innerText = `${innerText[x]}`;
    // const tableHeadShort2 = document.createElement('th');
    // tableRow.append(tableHeadShort2);
    // tableHeadShort2.innerText = "Most interest in"
    // const tableHeadShort3 = document.createElement('th');
    // tableRow.append(tableHeadShort3);
    // tableHeadShort3.innerText = "Age";
    // let th = document.querySelectorAll('th');
    // for (ths of th) {
    //     ths.style.border = "black 2px solid";
    //     console.log('th')
    // }
  }
  const tableBody = document.createElement("tbody");
  table.append(tableBody);
  const bodyRow = document.createElement("tr");
  tableBody.append(bodyRow);
  let count = 0;
  for (let x = 0; x < 6; x++) {
    const tableData = document.createElement("td");
    bodyRow.append(tableData);
    tableData.style.border = "4px solid black";

    console.log(count);
    if (x === 5) {
      count++;
      x = 0;
      if (count === 6) {
        return;
      }
    }
  }
}

createTable();

function tableData() {
  for (let x = 0; x < 5; x++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.style.border = "2px solid black";
    const td2 = document.createElement("td");
    td2.style.border = "2px solid black";
    const td3 = document.createElement("td");
    td3.style.border = "2px solid black";
    const td4 = document.createElement("td");
    td4.style.border = "2px solid black";
    const td5 = document.createElement("td");
    td5.style.border = "2px solid black";
    const td6 = document.createElement("td");
    td6.style.border = "2px solid black";
    const tbody = document.querySelector("tbody");
    tbody.append(tr);
    tr.append(td);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(td6);

    let h = document.querySelectorAll("td");
    for (hStyle of h) {
      hStyle.style.width = "100px";
      hStyle.style.height = "100px";
    }
  }
}

function row() {
  let row = ["tr", "td", "td2", "td3", "td4", "td5"];

  for (let x = 0; x < row.length; x++) {
    let element = document.createElement(`${row[x]}`);
  }
}
