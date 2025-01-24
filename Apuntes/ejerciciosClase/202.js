
window.onload = iniciar;

function iniciar() {
    document.getElementById("form").addEventListener('submit', validar, false);
    console.log("cargado")
}

function validarNIF() {
    let NIF = document.getElementById("NIF");
    let NIFv = NIF.value;

    if (!isNaN(NIFv[0])) {
        alert("El primer carácter ha de ser una letra");
        return false;
    }

    return true;
}

function validar(e) {
    console.log("comienzo")
    if (validarNIF() === true) {
        return true;
    } 
    e.preventDefault();
    return false;
}