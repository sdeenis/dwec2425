// function crearTablero() {
//     let tablero = "<table>";
//     for (let i = 0; i < 8; i++) {
//         tablero += "<tr>";
//         for (let j = 0; j < 8; j++) {
//             tablero += "<td><button></button></td>";
//         }
//         tablero += "</tr>";
//     }
//     tablero += "</table>";
//     return tablero;
// }

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

function crearTableroBombas() {
    var tablero = new Array();
    var bombas = new Array();
    let coorX
    let coorY

    for (let i = 0; i < 8; i++) {
        coorX = Math.floor(Math.random() * 3);
        coorY = Math.floor(Math.random() * 3);
        console.log(coorX, coorY)
        
        while (bombas.includes([coorX,coorY])) {
            coorX = Math.floor(Math.random() * 3);
            coorY = Math.floor(Math.random() * 3);
            console.log(coorX, coorY)
        }

        bombas.push([coorX,coorY]);
        console.log(`Iteración ${i + 1}:`, bombas);
    }

    // for (let i = 0; i < 8; i++) {
    //     for (let j = 0; j < 8; j++) {

    //     }
    // }

    return tablero;
}


