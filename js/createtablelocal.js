out("im in create table")
const marsUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=100&page=2&api_key=cXrM4POFLGgBFlOOAbiEk3K0q2NfzynY0Ckydqap"
const urlLocalPhotos = "http://localhost:8080/photos";
const urlPhotosFromNavCam = "http://localhost:8080/photosfromnavcamera"
const pbGetPhotos = document.getElementById("pbGetPhotos")

const tblPhotos = document.getElementById("tblMars")
const pbCreatTable = document.getElementById("pbCreateTable")
const pbSetPage = document.getElementById("pbSetPage")
const inpPage = document.getElementById("inpPage")

function createTable(photo) {
    if (!photo.id) return; //check photo.id is not: undefined or null or "" or 0

    let cellCount = 0;
    let rowCount = tblPhotos.rows.length
    out("rowcount=" + rowCount)
    let row = tblPhotos.insertRow(rowCount)

    let cell = row.insertCell(cellCount++)
    cell.innerHTML= photo.id

    cell = row.insertCell(cellCount++)
    cell.innerHTML= photo.sol

    cell = row.insertCell(cellCount++)
    let inpDescr = document.createElement("input")
    inpDescr.type = "text"
    inpDescr.setAttribute("value", photo.description)
    cell.appendChild(inpDescr)

    cell = row.insertCell(cellCount++)
    cell.innerHTML= photo.rover.name

    cell = row.insertCell(cellCount++)
    cell.innerHTML= photo.camera.name

    cell = row.insertCell(cellCount++)
    let atag = document.createElement("a")
    atag.setAttribute("href", photo.img_src)
    atag.innerText = photo.id
    cell.appendChild(atag)

    cell = row.insertCell(cellCount++)
    let img = document.createElement("img")
    img.setAttribute("src", photo.img_src)
    img.setAttribute("alt", photo.id)
    img.setAttribute("width", 100)
    img.setAttribute("height", 100)
    cell.appendChild(img)

    cell = row.insertCell(cellCount++)
    let pbUpdate = document.createElement("button")
    pbUpdate.textContent = "Update photo"
    cell.appendChild(pbUpdate)


}


pbCreatTable.addEventListener('click', createTable)

function fetchPhotos(url) {
    out("inside fetchphotos url=" + url)
    return  fetch(url).then(response => response.json()); //returns the result of json()
}

function printPhoto(photo) {
    out(photo)
    out("id=" + photo.id)
    out("rover=" + photo.rover)
    out("camera=" + photo.camera)

}

async function doFetchPhoto(btn) {
    //out(btn.srcElement.id) //the id of the button that was pressed
    out("fetch photos")
    let photos = await fetchPhotos(urlPhotosFromNavCam);
    out(photos); //students is an array
    let photoArr = photos;
    if (btn.srcElement.id == "pbGetPhotos") {
        photoArr.forEach(printPhoto)
    } else {
        photoArr.forEach(createTable)
    }
}

pbGetPhotos.addEventListener('click', doFetchPhoto)
pbCreatTable.addEventListener('click', doFetchPhoto)


const marsUrlStart = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=100&"

const marsUrlApiKey = "&api_key=cXrM4POFLGgBFlOOAbiEk3K0q2NfzynY0Ckydqap"

let marsPageUrl;

function changePage(btn) {
    out("change page")
    const page = inpPage.value
    const marsPageUrl = marsUrlStart + "page=" + page + marsUrlApiKey;
    tblPhotos.innerHTML = ""
    doFetchPhoto(btn)
}

pbSetPage.addEventListener('click', changePage)

function getMarsUrl() {
    if (marsPageUrl) {
        return marsPageUrl
    } else {
        return marsUrl
    }
}
