//variables globales
let numeroFilas, numeroColumnas, numeroBombas, cronometro 
let numeroCasillasDesmarcadas = 0


function iniciarJuego() {
    numeroCasillasDesmarcadas = 0
    let dificultad = document.getElementById("dificultad").value
    console.log(`dificultad seleccionada: ${dificultad}`)
    asignarVariables(dificultad)
    generarTablero()
    arrayBombas = generarBombas()
    empezarCronometro()
}

function empezarCronometro() {
    clearInterval(cronometro)
    document.getElementsByClassName("cronometro")[0].textContent = "00:00 ⏱"
    let segundos = 0
    let minutos = 0
    cronometro = setInterval(() => {
        segundos++
        if (segundos === 60) {
            minutos++
            segundos = 0
        }
        let minStr = minutos.toString().padStart(2, '0') 
        let segStr = segundos.toString().padStart(2, '0') 

        document.getElementsByClassName("cronometro")[0].textContent = `${minStr}:${segStr} ⏱`
    }, 1000)
}

function pararCronometro() {
    clearInterval(cronometro)
}

function asignarVariables(dificultad) {
    //asignamos variables segun dificultad. Bombas = casillas * 0.3
    switch (dificultad) {
        case "facil":
            numeroFilas = 10
            numeroColumnas = 10
            numeroBombas = 1
            break
        case "media":
            numeroFilas = 18
            numeroColumnas = 18
            numeroBombas = 97
            break
        case "dificil":
            numeroFilas = 24
            numeroColumnas = 24
            numeroBombas = 172
            break
    }
}

function generarTablero() {
    document.getElementById("mensajeDerrota").style.display = "none"
    document.getElementById("mensajeVictoria").style.display = "none"

    let tablero = document.getElementById("tableroBM")
    tablero.innerHTML = ""

    let filaSuperior = document.createElement("div")
    filaSuperior.className = "filaSuperior"

    let numBanderas = document.createElement("div")
    numBanderas.className = "numBanderas"
    numBanderas.textContent = `${numeroBombas} 🚩`

    let cronometro = document.createElement("div")
    cronometro.className = "cronometro"
    cronometro.textContent = `00:00 ⏱`

    filaSuperior.appendChild(numBanderas)
    filaSuperior.appendChild(cronometro)

    tablero.appendChild(filaSuperior)
    
    for (let i = 0; i < numeroFilas; i++) {
        let fila = document.createElement("div")
        fila.className = "fila"
        for (let j = 0; j < numeroColumnas; j++) {
            let casilla = document.createElement("div")
            casilla.className = "casilla"
            casilla.id = `${i}-${j}`
            casilla.addEventListener("click", abrirCasilla)
            casilla.addEventListener("contextmenu", marcarCasilla)
            fila.appendChild(casilla)
        }
        tablero.appendChild(fila)
    }
}

function generarBombas() {
    let bombas = new Set();

    while (bombas.size < numeroBombas) {
        let coorX = Math.floor(Math.random() * numeroFilas);
        let coorY = Math.floor(Math.random() * numeroColumnas);
        let coorXY = `${coorX}-${coorY}`;

        bombas.add(coorXY); // solo se añadira si no está repetido
    }
    return Array.from(bombas); //devolvemos el set convertido en array
}

function abrirCasilla(e) {
    console.log(`has pulsado ${e.target.id}`)

    if (arrayBombas.includes(e.target.id)) {
        console.log("Has perdido")
        e.target.style.backgroundColor = "red"
        hasPerdido()
    } else {
        let cont = detectarBombas(e.target.id)
        console.log(`las bombas son ${cont}`)
        if (cont > 0) {
            e.target.classList.add("casillaabierta", `casilla-${cont}`);
            e.target.textContent = cont
            e.target.removeEventListener("click", abrirCasilla)
            e.target.removeEventListener("contextmenu", marcarCasilla)
            numeroCasillasDesmarcadas++
            comprobarVictoria()
            console.log(`casillas desmarcadas ${numeroCasillasDesmarcadas}`)
        } else {
            abrirVecinas(e.target.id)
            e.target.classList.add("casillaabierta");
            e.target.removeEventListener("click", abrirCasilla)
            e.target.removeEventListener("contextmenu", marcarCasilla)
            
            console.log(`casillas desmarcadas ${numeroCasillasDesmarcadas}`)
            comprobarVictoria()
        }
    }
}

function comprobarVictoria() {
    if (numeroCasillasDesmarcadas == ((numeroFilas * numeroColumnas) - numeroBombas)) {
        let mensajeVictoria = document.getElementById("mensajeVictoria");
        mensajeVictoria.textContent = "¡Has ganado! 🎉";
        mensajeVictoria.style.display = "block"; 
    }
}

function hasPerdido() {
    let casillas = document.getElementsByClassName("casilla")
    for (let casilla of casillas) {
        casilla.removeEventListener("click", abrirCasilla)
        casilla.removeEventListener("contextmenu", marcarCasilla)
        if (arrayBombas.includes(casilla.id)) {
            casilla.classList.add("bombas")
        }
    }
    pararCronometro()

    let mensajeDerrota = document.getElementById("mensajeDerrota");
    mensajeDerrota.textContent = "¡Has perdido! 😞";
    mensajeDerrota.style.display = "block"; 
}

function abrirVecinas(posicion) {
    let coordenadaX = Number(posicion.split("-")[0])
    let coordenadaY = Number(posicion.split("-")[1])

    for (let i = coordenadaX - 1; i <= coordenadaX + 1; i++) {
        for (let j = coordenadaY - 1; j <= coordenadaY + 1; j++) {
            let nuevaPosicion = `${i}-${j}`
            let casilla = document.getElementById(nuevaPosicion)

            if (casilla && !casilla.classList.contains("casillaabierta")) {
                let cont = detectarBombas(nuevaPosicion)
                casilla.classList.add("casillaabierta");
                casilla.removeEventListener("click", abrirCasilla)
                casilla.removeEventListener("contextmenu", marcarCasilla)

                if (cont === 0) { 
                    casilla.innerHTML = ""
                    numeroCasillasDesmarcadas++
                    abrirVecinas(nuevaPosicion) 
                } else {
                    casilla.classList.add(`casilla-${cont}`)
                    casilla.innerHTML = cont
                    numeroCasillasDesmarcadas++
                }
            }
        }
    }
}

function detectarBombas(posicion) {
    // console.log(posicion + " detectando bombas")
    let coordenadaX = Number(posicion.split("-")[0])
    let coordenadaY = Number(posicion.split("-")[1])
    // console.log(coordenadaX, coordenadaY)

    let cont = 0;

    for (let i = coordenadaX - 1; i < coordenadaX + 2; i++) {
        for (let j = coordenadaY - 1; j < coordenadaY + 2; j++) {
            let coor = "" + i + "-" + j
            console.log(coor)
            if (arrayBombas.includes(coor)) {
                cont++
            }
        }
    }
    console.log(cont)
    return cont;
}

function marcarCasilla(e) {
    e.preventDefault()
    console.log(`has marcado ${e.target.id}`)
    // e.target.innerHTML = "🚩" -> lo añado en css

    if (e.target.classList.contains("marcada")) {
        e.target.classList.remove("marcada");
        document.getElementsByClassName("numBanderas")[0].textContent = `${++numeroBombas} 🚩`;
    } else { 
        e.target.classList.add("marcada");
        document.getElementsByClassName("numBanderas")[0].textContent = `${--numeroBombas} 🚩`;
    }
}