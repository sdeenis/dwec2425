function crearTablero() {
    let tablero = "<table>";
    for (let i = 0; i < 8; i++) {
        tablero += "<tr>";
        for (let j = 0; j < 8; j++) {
            tablero += "<td><button></button></td>";
        }
        tablero += "</tr>";
    }
    tablero += "</table>";
    return tablero;
}

function crearTableroDivs() {
    let tablero = "<div class='tablero'>";
    for (let i = 0; i < 8; i++) {
        tablero += "<div class='fila'>";
        for (let j = 0; j < 8; j++) {
            tablero += "<div class='casilla'><button></button></div>";
        }
        tablero += "</div>";
    }
    tablero += "</div>";
    return tablero;
}

