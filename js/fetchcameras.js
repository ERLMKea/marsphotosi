out("im in fetch cameras")

const urlCamera = "http://localhost:8080/cameras";

function fetchCameras(url) {
    return fetch(url).then(response => response.json())
}

let cameraMap = new Map();

async function actionFetchCamera(btn) {
    let cameras = await fetchCameras(urlCamera)
    out(cameras)
    cameras.forEach(camera => cameraMap.set(camera.id, camera));
    out("here is the map")
    out(cameraMap);
}

const pbGetCameras = document.getElementById("pbGetCameras")
pbGetCameras.addEventListener('click', actionFetchCamera)

