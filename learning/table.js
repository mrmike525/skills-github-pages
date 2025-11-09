function generateTable(rows = 6, cols = 6) {
  // Remove existing table (optional cleanup)
  const existing = document.querySelector("table");
  if (existing) existing.remove();

  // Create table
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.margin = "20px auto";
  table.style.textAlign = "center";

  // Generate rows and columns
  for (let r = 0; r < rows; r++) {
    const tr = document.createElement("tr");

    for (let c = 0; c < cols; c++) {
      const td = document.createElement("td");

      // Example cell value — you can change this logic
      td.textContent = `${r + 1},${c + 1}`;

      // Basic styling
      td.style.border = "2px solid black";
      td.style.padding = "10px";
      td.style.width = "60px";
      td.style.height = "40px";

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  // Add to the body
  document.body.appendChild(table);
}

// Example usage:
generateTable(6, 6); // 6x6 table
// generateTable(4, 8); // try 4x8
// document.querySelector('table').style.display = "none";
// document.querySelector('table').style.display = "table";
let td = document.querySelectorAll("td");
// for (tds of td) {
//   tds.textContent = ""
// }
