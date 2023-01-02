const ROWS = 10
const COLS = 10
const SHOOTS = 100
let shoots1 = []
let shoots2 = []

function barco(name, size, simbol, amount) {
    this.name = name,
    this.size = size,
    this.simbol = simbol,
    this.amount = amount
}

let portavion = new barco('portavion', 5, 'P', 1)
let buque = new barco('buque', 4, 'B', 1)
let submarino = new barco('submarino', 3, 'S', 2)
let crucero = new barco('crucero', 2, 'C', 3)
let lancha = new barco('lancha', 1, 'L', 3)

function espaciosVacios (y,x, barco, board1){
    for (let i=0; i<barco.size ; i++){
        if(board1[y][x + i]=== ''){
            let vacio = []

        }
        else {
            return false
        }
    }
    return true
}
function colocarbarcos(barco1, barco2, barco3, barco4, barco5, board1) {
    for (let i = 0; i<barco1.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board1[y][x] === '') && (barco1.size + x <= 10) && (espaciosVacios(y,x,barco1, board1)=== true)){
            for (let j=0; j<barco1.size; j++){
                board1[y][x+j] += barco1.simbol

            }
            console.log("Es portavion!");
        } else {
        i--
        }
    }
    for (let i = 0; i<barco2.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board1[y][x] === '') && (barco2.size + x <= 10 && (espaciosVacios(y,x,barco2, board1)=== true))){
            for (let j=0; j<barco2.size; j++){
                board1[y][x+j] = barco2.simbol
            }
            console.log("Es buque!");
        } else {
            i--
            }
        }
    for (let i = 0; i<barco3.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board1[y][x] === '') && (barco3.size + x <= 10) && (espaciosVacios(y,x,barco3, board1)=== true)){
            for (let j=0; j<barco3.size; j++){
                board1[y][x+j] = barco3.simbol
            }
            console.log("Es submarino!");
        } else {
            i--
            }
        }
    for (let i = 0; i<barco4.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board1[y][x] === '') && (barco4.size + x <= 10) && (espaciosVacios(y,x,barco4, board1)=== true)){
            for (let j=0; j<barco4.size; j++){
                board1[y][x+j] = barco4.simbol
            }
            console.log("Es crucero!");
        } else {
            i--
            }
        }
    
    for (let i = 0; i<barco5.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board1[y][x] === '') && (barco5.size + x <= 10) && (espaciosVacios(y,x,barco5, board1)=== true)){
            for (let j=0; j<barco5.size; j++){
                board1[y][x+j] = barco5.simbol
            }
            console.log("Es lancha!");
        } else {
            i--
            }
        }

    return board1
} 

const tablero2= ['','','','','','','','','','',]
let tabla

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }

function creaTablero(rows,cols,callback){
    let board1 = callback(rows,cols)

    let boardMezclado = colocarbarcos(portavion, buque, submarino, crucero, lancha, board1)

    
        console.log('pppp',boardMezclado)
        tabla = []
        for (let fila of boardMezclado){
            
        
            tabla.push(fila)
        }
    return tabla
}

function tableroVacio(rows,cols){
    let newBoard = []
    for(let i = 0; i < rows; i++) {
        // una fila cualquiera
        let row = []
        // por cada columna
        for(let j = 0; j < cols; j++) {
            //console.log(j, i)
            row[j] = tablero2[i]
        }
        newBoard[i] = row
    }
    return newBoard
}

const flota = [portavion, buque, submarino, crucero, lancha]



function comprobarSiHayBarcos(numerojugador){
    let rr = numerojugador.map(jugador => jugador.includes(portavion.simbol) || jugador.includes(buque.simbol) || jugador.includes(submarino.simbol) || jugador.includes(crucero.simbol) || jugador.includes(lancha.simbol))
    
    let comprobar = rr.find(comprobacion => comprobacion === true)
    return comprobar
    
}
function coordenada() {
    y = getRandomInt(ROWS),
    x = getRandomInt(ROWS) 
    return x,y

}
let yTiro = ''
let xTiro = ''

function shoot (tableroContrario){
    yTiro = getRandomInt(ROWS)
    xTiro = getRandomInt(ROWS) 
    //let shoot = tableroContrario[yTiro][xTiro]
    //return shoot
    
}

function comprobarTocado(tableroContrario, vacioturno){
    let shoot = tableroContrario[yTiro][xTiro]
    if(shoot===''){
        tableroContrario[yTiro][xTiro] = '💧'
        vacioturno[yTiro][xTiro] = '💧'
        return '💧'

    }
    else if (shoot === 'P' || shoot ==='B' || shoot ==='S' || shoot ==='C' || shoot ==='L'){

        tableroContrario[yTiro][xTiro] = '💥'
        vacioturno[yTiro][xTiro] = '💥'
        return '💥'

    }


}

function turnoJugador (jugadorContrario, shootMano, vacioturno, jugadorMano){
    let turno = true
    let ganador = false
    while(turno){
        shoot(jugadorContrario)
        
        let arr = shootMano.map(value => JSON.stringify(value) === JSON.stringify([yTiro, xTiro]))
        if(arr.includes(true) === false){
            shootMano.push([yTiro, xTiro])
            let comproba = comprobarTocado(jugadorContrario, vacioturno, jugadorMano)
            
            if (comproba=== '💧'){
                turno = false
                console.log('JUGADOR1')
                console.log('lleno1')
                console.table(jugador1)
                console.log('vacio1') 
                console.table(vacio1)
                console.log('JUGADOR2')
                console.log('lleno2')
                console.table(jugador2)
                console.log('vacio2')
                console.table(vacio2)
                console.log('agua')
            }
            else if (comproba === '💥'){
                console.log('JUGADOR1')
                console.log('lleno1')
                console.table(jugador1)
                console.log('vacio1')
                console.table(vacio1)
                console.log('JUGADOR2')
                console.log('lleno2')

                console.table(jugador2)
                console.log('vacio2')
                console.table(vacio2)
                console.log('a ver si hundo')
                if(comprobarSiHayBarcos(jugadorContrario) != true){
                    console.log(`ganador ${jugadorMano}`)
                    turno= false
                    ganador = true
                }
            }

            
        }
            
            
    }
    return ganador

}



let jugador1 = creaTablero(ROWS, COLS, tableroVacio)
let jugador2 = creaTablero(ROWS, COLS, tableroVacio)
let vacio1 = tableroVacio(ROWS, COLS)
let vacio2 = tableroVacio(ROWS, COLS)


let turnoJugador1 = turnoJugador(jugador2, shoots1, vacio1, 'Jugador1')
let turnoJugador2 = turnoJugador(jugador1, shoots2, vacio2, 'Jugador2')
while(turnoJugador1=== false && turnoJugador2=== false ){
    turnoJugador1 = turnoJugador(jugador2, shoots1, vacio1, 'Jugador1')
    if (turnoJugador1 === true){
        break
    }
    turnoJugador2 = turnoJugador(jugador1, shoots2, vacio2, 'Jugador2')
    console.log(shoots1.length)
    console.log(shoots2.length)
}
