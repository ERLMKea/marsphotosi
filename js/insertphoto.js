const out = (any) => console.log(any);

out("im in insert photo")

out("im in formphoto");
document.addEventListener('DOMContentLoaded', createFormEventListener);
let photoForm;

function createFormEventListener(){
    photoForm = document.getElementById("newPhotoForm");
    out(photoForm)
    photoForm.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;

    out(form);

    try {
        const formData = new FormData(form);
        out(formData.entries());

        const responseData = await postFormDataAsJson(url, formData);
    } catch (error) {
        alert(error.message);
        console.error("xxxxxxxxxxxxxx" + error);
    }

}

async function postFormDataAsJson(url, formData) {
    // convert formData til JSON
    const plainFormData = Object.fromEntries(formData.entries());
    out(plainFormData)
    const formDataJsonString = JSON.stringify(plainFormData);
    console.log(formDataJsonString);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();

}