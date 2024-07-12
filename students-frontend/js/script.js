//masks
$("#inputTelefone").mask("(99) 9999-99999");

var students = [];

var courses = [
    { id: 1, name: "Java" },
    { id: 2, name: "Angular" },
    { id: 3, name: "HTML + CSS" }
];

loadStudents();

function loadStudents() {
    for (let op of students) {
        addNewRow(op);
    }
}

function save() {
    var op = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        telephone: document.getElementById("inputTelefone").value,
        course: document.getElementById("selectCurso").value,
        morning: document.getElementById("radioManha").checked,
        afternoon: document.getElementById("radioTarde").checked,
        night: document.getElementById("radioNoite").checked,
    };

    addNewRow(op);
    students.push(op);

    document.getElementById("idformulario").reset();
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

    var telephoneNode = document.createTextNode(op.telephone);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(telephoneNode);

    var courseNode = document.createTextNode(courses[op.course - 1].name);
    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    cell.appendChild(courseNode);

    var opcao = "";
    if (op.morning)
        opcao = "Manhã";
    else if (op.afternoon)
        opcao = "Tarde";
    else if (op.night)
        opcao = "Noite";

    newRow.insertCell().innerHTML = `<p class="d-none d-md-table-cell">${opcao}</p>`;

    /* var periodNode = document.createTextNode(periods[op.period - 1].name);
     newRow.insertCell().appendChild(periodNode); */
}
