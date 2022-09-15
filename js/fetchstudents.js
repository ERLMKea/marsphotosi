const out = (any) => console.log(any)

out("im ready to fetch")

const pbGetStudents = document.getElementById("pbGetStudent")

function fetchStudents() {
    out("inside fetchstudents")
    const studentUrl = "http://localhost:8080/students"
    return  fetch(studentUrl).then(response => response.json());
}

async function doFetchStudents(btn) {
    out("fetch students")
    let students = await fetchStudents();
    out(students);

}

pbGetStudents.addEventListener('click', doFetchStudents)

