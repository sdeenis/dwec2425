
window.onload = iniciar;

function iniciar() {
    document.getElementById("form").addEventListener('submit', validar, false);
    document.getElementById("todos").addEventListener("click", validarTodos)
    console.log("cargado")
}

function validarMensaje() {
    let mensaje = document.getElementById("mensaje");
    let mensajev = mensaje.value;

    console.log(mensajev.length)
    if(mensajev.length > 500 || mensajev.length < 2) {
        alert("El mensaje debe tener entre 2 y 500 caracteres");
        return false;
    }
    return true;
}

function validarTodos() {
    // let todosBtn = document.getElementById("todos");

    if (document.getElementById("todos").checked == false) {
        document.getElementById("lunes").checked = false;
        document.getElementById("martes").checked = false;
        document.getElementById("miercoles").checked = false;
        document.getElementById("jueves").checked = false;
        document.getElementById("viernes").checked = false;
    } else {
        document.getElementById("lunes").checked = true;
        document.getElementById("martes").checked = true;
        document.getElementById("miercoles").checked = true;
        document.getElementById("jueves").checked = true;
        document.getElementById("viernes").checked = true;
    }
}

function validar(e) {
    console.log("comienzo")
    if (validarMensaje() === true) {
        return true;
    } 
    e.preventDefault();
    return false;
}