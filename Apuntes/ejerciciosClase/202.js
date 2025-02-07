
window.onload = iniciar;

function iniciar() {
    console.log("cargado")
    document.getElementById("form").addEventListener('submit', validar, false);
    document.getElementById("todos").addEventListener("click", marcarTodos)
    document.getElementById("mensaje").addEventListener("input", contarCaracteres)
    document.getElementById("anadirano").addEventListener("click", anadirAno)
}
function anadirAno(e) {
    e.preventDefault();
    let nuevo = document.getElementById("nuevoano").value;
    let lista = document.getElementById("curso");
    let option = document.createElement("option");
    option.text = nuevo;
    lista.add(option);
}

function contarCaracteres() {
    let mensaje = document.getElementById("mensaje");
    let mensajev = mensaje.value;

    let parrafo = document.getElementById("contador");
    let parrafov = "";

    parrafov = "Contador de caracteres: " + mensajev.length + "/500";
    parrafo.innerHTML = parrafov;
}

function validarMensaje() {
    let mensaje = document.getElementById("mensaje");
    let mensajev = mensaje.value;

    if (mensajev.length == 0 || mensajev.length > 500 || mensajev.length < 2) {
        alert("El mensaje debe tener entre 2 y 500 caracteres");
        return false;
    }
    return true;
}

function marcarTodos() {
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

function validarDias() {
    let arrayDias = [];
    arrayDias.push(document.getElementById("lunes"));
    arrayDias.push(document.getElementById("martes"));
    arrayDias.push(document.getElementById("miercoles"));
    arrayDias.push(document.getElementById("jueves"));
    arrayDias.push(document.getElementById("viernes"));
    let contador = 0;

    for (let i = 0; i < arrayDias.length; i++) {
        if (arrayDias[i].checked) {
            contador++
        }
    }

    if (contador < 2) {
        alert("Debe seleccionar al menos dos días");
        return false;
    }
    return true;
}

function validarNombre() {
    let nombre = document.getElementById("nombre");
    let nombrev = nombre.value;

    if (nombrev.length == 0) {
        alert("El nombre no puede estar vacio");
        return false;
    }
    return true;
}



function validar(e) {
    console.log("comienzo"); 

    let mensajeValido = validarMensaje();
    console.log("Resultado de validarMensaje:", mensajeValido);
    let diasValidos = validarDias();
    console.log("Resultado de validarDias:", diasValidos);
    let nombreValido = validarNombre();
    console.log("Resultado de validarNombre:", nombreValido);

    if (mensajeValido === true && diasValidos === true && nombreValido === true) {
        return true;
    } 

    e.preventDefault();
    return false;
}
