//masks
$("#inputTelefone").mask("(99) 9999-99999");

var students = [];

var courses = [];

var turnos = [
    { id: 1, name: "Manhã" },
    { id: 2, name: "Tarde" },
    { id: 3, name: "Noite" }
];

loadCourses();
loadStudents();

function loadCourses() {
    $.ajax({
        url: "http://localhost:8080/courses",
        type: "GET",
        async: false,
        success:
            (response) => {
                courses = response;
                for (var cou of courses) {
                    document.getElementById("selectCurso").innerHTML += `<option value="${cou.id}">${cou.name}</option>`;
                }
            }
    });
}

function loadStudents() {
    $.getJSON("http://localhost:8080/student", (response) => {
        students = response;
        for (let op of students) {
            addNewRow(op);
        }
    });
}

function save() {
    const selectedValue = getSelectedRadioValue();
    var op = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputTelefone").value,
        idCurso: document.getElementById("selectCurso").value,
        period: selectedValue,
    };

    $.ajax({
        url: "http://localhost:8080/student",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(op),
        success:
            (student) => {
                addNewRow(op);
                students.push(op);

                document.getElementById("idformulario").reset();
            }
    });
}

function getSelectedRadioValue() {

    const radios = document.getElementsByName("flexRadioPeriodo");

    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
}

function addNewRow(op) {
    var table = document.getElementById("studentstable");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(op.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(op.name);
    newRow.insertCell().appendChild(nameNode);

    var emailNode = document.createTextNode(op.email);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(emailNode);

    var telephoneNode = document.createTextNode(op.phone);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(telephoneNode);

    var courseNode = document.createTextNode(courses[op.idCurso - 1].name);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(courseNode);

    var periodNode = document.createTextNode(turnos.find(turno => turno.id == op.period).name);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(periodNode);
}
