export{ tablero2, ROWS, COLS, SHOOTS, shoots1, shoots2, portavion, buque, submarino, crucero, lancha, vida1, vida2, submarinoJugador1, cruceroJugador1, submarinoJugador2, cruceroJugador2, tabla, flota}
import {barco} from "./classBarco.js"



const tablero2= ['','','','','','','','','','',]
const ROWS = 10
const COLS = 10
const SHOOTS = 100
let shoots1 = []
let shoots2 = []
let portavion = new barco('portavion', 5, 'P', 1, 5)
let buque = new barco('buque', 4, 'B', 1, 4)
let submarino = new barco('submarino', 3, 'S', 2, 3)
let crucero = new barco('crucero', 2, 'C', 3, 2)
let lancha = new barco('lancha', 1, 'L', 3, 1)
let vida1 = {
    portavion : portavion.vida,
    buque: buque.vida,
    submarino : submarino.vida,
    crucero : crucero.vida,
    lacha : lancha.vida
}

let vida2 = {
    portavion : portavion.vida,
    buque : buque.vida,
    submarino : submarino.vida,
    crucero : crucero.vida,
    lacha : lancha.vida
}


let submarinoJugador1 = {
    sub1 : {coordenada : [],
            vidas : submarino.vida},
    sub2 :{coordenada : [],
        vidas : submarino.vida} 
}

let cruceroJugador1 = {
    cruce1 : {coordenada : [],
        vidas : crucero.vida},
    cruce2 : {coordenada : [],
        vidas : crucero.vida},
    cruce3 : {coordenada : [],
        vidas : crucero.vida}
}

let submarinoJugador2 = {
    sub1 : {coordenada : [],
            vidas : submarino.vida},
    sub2 :{coordenada : [],
        vidas : submarino.vida} 
}

let cruceroJugador2 = {
    cruce1 : {coordenada : [],
        vidas : crucero.vida},
    cruce2 : {coordenada : [],
        vidas : crucero.vida},
    cruce3 : {coordenada : [],
        vidas : crucero.vida}
}

let tabla
const flota = [portavion, buque, submarino, crucero, lancha]

