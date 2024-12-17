// Haciendo uso de HTML, CSS y JavaScript, implementa la siguiente página, teniendo en cuenta los siguientes requerimientos:
//     • El botón “Cambiar texto” → Escribe el texto introducido en la div 
//     • El botón Cambiar fondo” → Cambia el color de fondo de la DIV, según el color elegido
//     • El botón “Cambiar borde” → Cambia el color del borde de la DIV, según el color elegido.
//     • El botón “Cambiar color texto” → Cambia el color del texto de la DIV, según el color elegido

function CambiarTexto() {
    let texto = document.getElementById("idTexto").value;
    document.getElementById("idSpanTexto").innerHTML = texto;
}

function CambiarColorFondo() {
    let color = document.getElementById("idColorFondo").value;
    // document.body.style.backgroundColor = color;
    document.getElementById("idDivTexto").style.backgroundColor = color;
}

function CambiarColorBorde() {
    let color = document.getElementById("idColorBorde").value;
    document.getElementById("idDivTexto").style.borderColor = color;
}

function CambiarColorTexto() {
    let color = document.getElementById("idColorTexto").value;
    document.getElementById("idSpanTexto").style.color = color;
}

