function makeUpper() {
    let txt = document.getElementById("txtName")
    txt.value = txt.value.toUpperCase();
}

function add() {
    let txtName = document.getElementById("txtName");
    let txtPrice = document.getElementById("txtPrice");
    let txtStock = document.getElementById("txtStock");

    let table = document.getElementById("tblProducts");
    let row = document.createElement("tr");

    let nameColumn = document.createElement("td");
    nameColumn.innerText = txtName.value;
    let priceColumn = document.createElement("td");
    priceColumn.innerText = txtPrice.value;
    let stockColumn = document.createElement("td");
    stockColumn.innerText = txtStock.value;

    row.appendChild(nameColumn);
    row.appendChild(priceColumn);
    row.appendChild(stockColumn);

    table.appendChild(row);

    txtName.value = "";
    txtPrice.value = "";
    txtStock.value = "";
}

