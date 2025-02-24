window.onload = inicio


function inicio() {
    document.getElementById("contenedor").innerHTML = crearTableroDivs();
    stringBombas = crearTableroBombas();
}

function crearTableroDivs() {
    let tablero = "<div class='tablero'>";
    for (let i = 0; i < 10; i++) {
        tablero += "<div class='fila'>";
        for (let j = 0; j < 10; j++) {
            tablero += `<div class='casilla'><button class='${i}${j}' onclick='pulsarBoton(event)' id='casilla'></button></div>`;
        }
        tablero += "</div>";
    }
    tablero += "</div>";

    return tablero;
}

function pulsarBoton(e) {
    if (stringBombas.includes(e.target.className)) {
        alert("has perdio")
    } else {
        let cont = detectarBombas(e.target.className)
        console.log(`las bombas son ${cont}`)
        if (cont > 0) {
            e.target.innerHTML = cont
        } else {
            e.target.innerHTML = cont
            abrirTablero(e.target.className)
        }
    }
}

function abrirTablero(pos) {
    let fil = Number(pos[0])
    let col = Number(pos[1])
    console.log(fil, col)

    let cont = 0;

    for (let i = fil - 1; i < fil + 2; i++) {
        for (let j = col - 1; j < col + 2; j++) {
            let coor = "" + i + j
            console.log(coor)
            if (stringBombas.includes(coor)) {
                cont++
            }
        }
    }

    if (cont == 0) {
        document.getElementsByClassName(pos)[0].innerHTML = cont
        abrirTablero(coor)
    }
}

function detectarBombas(pos) {
    let fil = Number(pos[0])
    let col = Number(pos[1])
    console.log(fil, col)

    let cont = 0;

    for (let i = fil - 1; i < fil + 2; i++) {
        for (let j = col - 1; j < col + 2; j++) {
            let coor = "" + i + j
            console.log(coor)
            if (stringBombas.includes(coor)) {
                cont++
            }
        }
    }

    

    console.log(cont)
    return cont;
}

function crearTableroBombas() {
    var tablero = new Array();
    var bombas = new Array();
    let coorX
    let coorY

    for (let i = 0; i < 2; i++) {
        coorX = Math.floor(Math.random() * 3);
        coorY = Math.floor(Math.random() * 3);

        coorXY = "" + coorX + coorY;

        while (bombas.includes(coorXY)) {
            // console.log("estoy dentro del bucle")
            coorX = Math.floor(Math.random() * 3);
            coorY = Math.floor(Math.random() * 3);
            coorXY = "" + coorX + coorY;
            // console.log(coorX, coorY)
        }
        bombas.push(coorXY);
        console.log(`Iteración ${i + 1}:`, bombas);
    }
    return bombas;
}


