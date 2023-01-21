
import {creaTablero, tableroVacio, printHeading, turnoJugador} from "./functions.js";
import { ROWS, COLS, shoots1, shoots2, vida1, vida2, submarinoJugador1, cruceroJugador1, submarinoJugador2, cruceroJugador2} from "./datas.js"


let jugador1 = creaTablero(ROWS, COLS, tableroVacio, submarinoJugador1, cruceroJugador1)
let jugador2 = creaTablero(ROWS, COLS, tableroVacio, submarinoJugador2, cruceroJugador2)
let vacio1 = tableroVacio(ROWS, COLS)
let vacio2 = tableroVacio(ROWS, COLS)
printHeading('COMIENZA EL JUEGO')
printHeading('Tablero Jugador 1')
console.table(jugador1)
printHeading('Tablero Jugador 2')
console.table(jugador2)

console.log('Comienzan las rondas de disparos')
let turnoJugador1 = turnoJugador(jugador2, shoots1, vacio1, 'Jugador1', vida1, submarinoJugador2, cruceroJugador2, jugador1)
let turnoJugador2 = turnoJugador(jugador1, shoots2, vacio2, 'Jugador2', vida2, submarinoJugador1, cruceroJugador1, jugador2)
while(turnoJugador1=== false && turnoJugador2=== false ){
    turnoJugador1 = turnoJugador(jugador2, shoots1, vacio1, 'Jugador1', vida1, submarinoJugador2, cruceroJugador2, jugador1)
    if (turnoJugador1 === true){
        break
    }
    turnoJugador2 = turnoJugador(jugador1, shoots2, vacio2, 'Jugador2', vida2, submarinoJugador1, cruceroJugador1, jugador2)
    
}