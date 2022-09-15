out("im in create table")
const marsUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=100&page=1&api_key=cXrM4POFLGgBFlOOAbiEk3K0q2NfzynY0Ckydqap"
const pbGetPhotos = document.getElementById("pbGetPhotos")

const tblPhotos = document.getElementById("tblMars")
const pbCreatTable = document.getElementById("pbCreateTable")

function createTableHardCoded() {
    let rowCount = tblPhotos.rows.length
    out("rowcount=" + rowCount)
    let row = tblPhotos.insertRow(rowCount)
    let cell1 = row.insertCell(0)
    cell1.innerHTML= "1"
    let cell2 = row.insertCell(1)
    cell2.innerHTML= "Kurt"

    let cell3 = row.insertCell(2)
    let atag = document.createElement("a")
    atag.setAttribute("href", "https://www.dr.dk/")
    atag.innerText = "Danish Radio"
    cell3.appendChild(atag)
}

function createTable(photo) {
    let rowCount = tblPhotos.rows.length
    out("rowcount=" + rowCount)
    let row = tblPhotos.insertRow(rowCount)
    let cell1 = row.insertCell(0)
    cell1.innerHTML= "1"
    let cell2 = row.insertCell(1)
    cell2.innerHTML= "Kurt"

    let cell3 = row.insertCell(2)
    let atag = document.createElement("a")
    atag.setAttribute("href", "https://www.dr.dk/")
    atag.innerText = "Danish Radio"
    cell3.appendChild(atag)
}


pbCreatTable.addEventListener('click', createTable)

function fetchPhotos() {
    out("inside fetchphotos")
    return  fetch(marsUrl).then(response => response.json()); //returns the result of json()
}

function printPhoto(photo) {
    out(photo)
    out("id=" + photo.id)
    out("rover=" + photo.rover)
    out("camera=" + photo.camera)

}

async function doFetchPhoto(btn) {
    out("fetch photos")
    let photos = await fetchPhotos();
    out(photos); //students is an array
    let photoArr = photos.photos;
    photoArr.forEach(printPhoto)
}

pbGetPhotos.addEventListener('click', doFetchPhoto)



