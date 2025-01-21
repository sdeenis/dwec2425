// //seleccionar formulario
// var formulario1 = document.getElementById("miFormulario");
// var formulario2 = document.forms["miFormulario"];
// var formulario3 = document.getElementsByTagName("form")[0];
// var formulario4 = DocumentTimeline.forms[0];

//seleccionar elementos del forumualrio
// miFormulario.elements[];
// document.getElementsByTagName("input"); //o select, o textarea, o etc

window.onload = iniciar;

function iniciar() {
    document.getElementById("miFormulario").addEventListener('submit', validar, false);
}


function validarNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo no puede ser vacio");
        error(elemento);
        return false;
    }
    return true;
}

function validarTelefono() {
    var elemento = document.getElementById("telefono");
    limpiarError(elemento);
    if (isNaN(elemento.value)) {
        alert("El campo no puede no ser un número");
        error(elemento);
        return false;
    }
    return true;
}

function validarFecha() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;

    if (dia > 31 || mes > 12) {
        alert("La fecha es incorrecta");
        error(document.getElementById("dia"));
        error(document.getElementById("mes"));
        error(document.getElementById("anio"));
        return false
    }

    let fecha = new Date(anio, mes, dia);
    limpiarError(document.getElementById("dia"));
    limpiarError(document.getElementById("mes"));
    limpiarError(document.getElementById("anio"));

    if (isNaN(fecha)) {
        alert("La fecha es incorrecta");
        error(document.getElementById("dia"));
        error(document.getElementById("mes"));
        error(document.getElementById("anio"));
        return false;
    }
    return true;
}

function validarCheck() {
    let campoCheck = document.getElementById("mayor");
    limpiarError(campoCheck);
    if (!campoCheck.checked) {
        alert("Debe ser mayor de edad");
        error(campoCheck);
        return false;
    }
    return true;
}

function validar(e) {
    if (validarNombre() && validarTelefono() && validarFecha() && validarCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    }
    e.preventDefault();
    return false

}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}