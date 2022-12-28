const ROWS = 10
const COLS = 10
const SHOOT = 100

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

function espaciosVacios (y,x, barco){
    for (let i=0; i<barco.size ; i++){
        if(board[y][x + i]=== ''){
            let vacio = []

        }
        else {
            return false
        }
    }
    return true
}
function colocarbarcos(barco1, barco2, barco3, barco4, barco5) {
    for (let i = 0; i<barco1.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board[y][x] === '') && (barco1.size + x <= 10) && (espaciosVacios(y,x,barco1)=== true)){
            for (let j=0; j<barco1.size; j++){
                board[y][x+j] += barco1.simbol

            }
            console.log("Es portavion!");
        } else {
        i--
        }
    }
    for (let i = 0; i<barco2.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board[y][x] === '') && (barco2.size + x <= 10 && (espaciosVacios(y,x,barco2)=== true))){
            for (let j=0; j<barco2.size; j++){
                board[y][x+j] = barco2.simbol
            }
            console.log("Es buque!");
        } else {
            i--
            }
        }
    for (let i = 0; i<barco3.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board[y][x] === '') && (barco3.size + x <= 10) && (espaciosVacios(y,x,barco3)=== true)){
            for (let j=0; j<barco3.size; j++){
                board[y][x+j] = barco3.simbol
            }
            console.log("Es submarino!");
        } else {
            i--
            }
        }
    for (let i = 0; i<barco4.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board[y][x] === '') && (barco4.size + x <= 10) && (espaciosVacios(y,x,barco4)=== true)){
            for (let j=0; j<barco4.size; j++){
                board[y][x+j] = barco4.simbol
            }
            console.log("Es crucero!");
        } else {
            i--
            }
        }
    
    for (let i = 0; i<barco5.amount; i++){
        let x = getRandomInt(ROWS)
        let y = getRandomInt(ROWS)
        if((board[y][x] === '') && (barco5.size + x <= 10) && (espaciosVacios(y,x,barco5)=== true)){
            for (let j=0; j<barco5.size; j++){
                board[y][x+j] = barco5.simbol
            }
            console.log("Es crucero!");
        } else {
            i--
            }
        }

    return board
} 

// const barcos2 = {
//     portavion: ['🛥','🛥','🛥','🛥','🛥'],
//     buque: ['🛥','🛥','🛥','🛥'],
//     submarino: ['🛥','🛥','🛥'],
//     crucero:['🛥','🛥'],
//     lancha: ['🛥']
// }
// const barcos= {
//     portavion: {simbolo:['🛥','🛥','🛥','🛥','🛥'],
//                 cantidad:1},
//     buque: {simbolo:['🛥','🛥','🛥','🛥'],
//             cantidad:1},
//     submarino: {simbolo:['🛥','🛥','🛥'],
//                 cantidad:2},
//     crucero:{simbolo:['🛥','🛥'],
//              cantidad:3},
//     lancha: {simbolo:['🛥'],
//              cantidad:3}
// }
const tablero2= ['','','','','','','','','','',]
let board = []
let tabla

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }

function creaTablero(rows,cols,collback){
    collback(rows,cols)

    let boardMezclado = colocarbarcos(portavion, buque, submarino, crucero, lancha)

    
        console.log('pppp',boardMezclado)
        tabla = []
        for (let fila of boardMezclado){
            
        
            tabla.push(fila)
        }
    return tabla
}

function tableroVacio(rows,cols){
    for(let i = 0; i < rows; i++) {
        // una fila cualquiera
        let row = []
        // por cada columna
        for(let j = 0; j < cols; j++) {
            //console.log(j, i)
            row[j] = tablero2[i]
        }
        board[i] = row
    }
    return board
}

const flota = [portavion, buque, submarino, crucero, lancha]

jugador1 = creaTablero(ROWS, COLS, tableroVacio)
jugador2 = creaTablero(ROWS, COLS, tableroVacio)
vacio1 = tableroVacio(ROWS, COLS)
vacio2 = tableroVacio(ROWS, COLS)

console.log('JUGADOR1')
console.table(vacio1)
tableroJugador1=console.table(jugador1)
console.log('JUGADOR2')
console.table(vacio2)
tableroJugador2=console.table(jugador2)

console.log(vacio1.length)
console.log(jugador1.length)

let rr = jugador1.map(jugador => jugador.includes(portavion.simbol) || jugador.includes(lancha.simbol))
console.log(rr)