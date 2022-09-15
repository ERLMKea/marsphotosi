out("im in create table")

const tblPhotos = document.getElementById("tblMars")

function createTable() {
    let rowCount = tblPhotos.rows.length
    out("rowcount=" + rowCount)
    let row = tblPhotos.insertRow(rowCount)
    let cell1 = row.insertCell(0)
    cell1.innerHTML= "1"
    let cell2 = row.insertCell(0)
    cell2.innerHTML= "Kurt"



}

tblPhotos.addEventListener('click', createTable)

