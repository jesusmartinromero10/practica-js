const ROWS = 10
const COLS = 10
const NumberOfPortaviones = 1;
// const barcos2 = {
//     portavion: ['🛥','🛥','🛥','🛥','🛥'],
//     buque: ['🛥','🛥','🛥','🛥'],
//     submarino: ['🛥','🛥','🛥'],
//     crucero:['🛥','🛥'],
//     lancha: ['🛥']
// }
// let barco = {
//     simbolo:'',
//     size: '',
//     amount: '',
//     name: ''
// }

function barco(simbolo, size, amount, name) { 
	this.simbolo = simbolo;
	this.size = size;
	this.amount = amount;
	this.name = name;
}

let Portaviones = new barco();
Portaviones.simbolo = 'P',
Portaviones.size = '5',
Portaviones.amount = '1',
Portaviones.name = 'Portaviones';

let Lancha = new barco();
Lancha.simbolo = 'L',
Lancha.size = '1',
Lancha.amount = '3',
Lancha.name = 'Lancha';

let Submarino = new barco();
Submarino.simbolo = 'S',
Submarino.size = '3',
Submarino.amount = '2',
Submarino.name = 'Submarino';

let Buque = new barco();
Buque.simbolo = 'B',
Buque.size = '4',
Buque.amount = '1',
Buque.name = 'Buque';

let Crucero = new barco();
Crucero.simbolo = 'C',
Crucero.size = '2',
Crucero.amount = '3',
Crucero.name = 'Crucero';

let Coordenada = {
    x: 0,
    y: 0
}

function makeShipsOnBoard (myBoard) {
    let barcos = [];
    
    for (i=0; i<Portaviones.amount; i++){
        let boat = Portaviones;
        myBoard = placeBoat(boat, myBoard);
    }

    for (i=0; i<Lancha.amount; i++){
        let boat = Lancha;
        myBoard = placeBoat(boat, myBoard);
    }

    for (i=0; i<Buque.amount; i++){
        let boat = Buque;
        myBoard = placeBoat(boat, myBoard);
    }

    for (i=0; i<Submarino.amount; i++){
        let boat = Submarino;
        myBoard = placeBoat(boat, myBoard);
    }

    for (i=0; i<Crucero.amount; i++){
        let boat = Crucero;
        myBoard = placeBoat(boat, myBoard);
    }

    return myBoard;
}

function placeBoat (boatToPlace, myBoard) {

    // Hago bucle sobre el numero de barcos de cada tipo
    for(i=0; i<boatToPlace.amount; i++){
        let coord = Coordenada;
        coord.x = getRandomInt(10);
        coord.y = getRandomInt(10);
        if (coord.x + boatToPlace.size < 10) {
            // Expando el barco segun su tamaño
            for (j=0; j<boatToPlace.size; j++) {
                let pos = coord.x + j 
                if(myBoard[pos][coord.y] === ''){
                    myBoard[coord.x+j][coord.y] = boatToPlace.simbolo;
                    console.log(`es ${boatToPlace.name} en coordenada ${pos} ${coord.y}`);
                }
                else {
                    i--
                }
            }
        } else {
            i--
        }
    }

}

const barcos1= {
    portavion: {simbolo:['🛥','🛥','🛥','🛥','🛥'],
                cantidad:1},
    buque: {simbolo:['🛥','🛥','🛥','🛥'],
            cantidad:1},
    submarino: {simbolo:['🛥','🛥','🛥'],
                cantidad:2},
    crucero:{simbolo:['🛥','🛥'],
             cantidad:3},
    lancha: {simbolo:['🛥'],
             cantidad:3}
}
const tablero2= ['','','','','','','','','','',]
let board = []
let tabla

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }

function creaTablero(rows, cols, collback) {
    collback(rows,cols)

    board = makeShipsOnBoard(board);
    // for(barco of Object.keys(barcos)){
    //     for(i=0; i<barco.cantidad; i++){
    //         let x = getRandomInt(10)
    //         let y = getRandomInt(10)
    //         if(board[x][y] === ''){
    //             board[x][y] = barcos.portavion.simbolo
    //             console.log("Es portavion!");
    //         }
    //         else {
    //             i--
    //         }
    //     }
    //     switch(barco) {

    //         case 'portavion':
    //             for(i=0; i<barcos.portavion.cantidad; i++){
    //                 let x = getRandomInt(10)
    //                 let y = getRandomInt(10)
    //                 if(board[x][y] === ''){
    //                     board[x][y] = barcos.portavion.simbolo
    //                     console.log("Es portavion!");
    //                 }
    //                 else {
    //                     i--
    //                 }
    //             }
    //             break;
    //         case 'buque':
    //             for(i=0; i<barcos.buque.cantidad; i++){
    //                 let x = getRandomInt(10)
    //                 let y = getRandomInt(10)
    //                 if(board[x][y] === ''){
    //                     board[x][y] = barcos.buque.simbolo
    //                     console.log("Es buque!");
    //                 }
    //                 else{
    //                     i--
    //                 }
    //             }
    //             break;
    //         case 'submarino':
    //             for(i=0; i<barcos.submarino.cantidad; i++){
    //                 let x = getRandomInt(10)
    //                 let y = getRandomInt(10)
    //                 if(board[x][y] === ''){
    //                     board[x][y] = barcos.submarino.simbolo
    //                     console.log("Es submarino!");
    //                 }
    //                 else{
    //                     i--
    //                 }
    //             }
    //             break;
    //         case 'crucero': 
    //             for(i=0; i<barcos.crucero.cantidad; i++){
    //                 let x = getRandomInt(10)
    //                 let y = getRandomInt(10)
    //                 if(board[x][y] === ''){
    //                     board[x][y] = barcos.crucero.simbolo
    //                     console.log("Es crucero!");
    //                 }
    //                 else{
    //                     i--
    //                 }
    //             }
    //             break;
    //         case 'lancha':
    //             for(i=0; i<barcos.lancha.cantidad; i++){
    //                 let x = getRandomInt(10)
    //                 let y = getRandomInt(10)
    //                 if(board[x][y] === ''){
    //                     board[x][y] = barcos.lancha.simbolo
    //                     console.log("Es lancha!");
    //                 }
    //                 else{
    //                     i--
    //                 }
    //             }
                
                    
    //             break;
    //         default:
    //             console.log("error");
    //             break;
    //     }
    // }
        let boardMezclado = ''
        boardMezclado = board.flat(elemento=>elemento)
        console.log(boardMezclado)
        tabla = []
        for (let fila of boardMezclado){
            fila = fila.flat()
        // Elimina aleatoriamente los espacios vacíos del array hasta que tenga una longitud de 10 elementos
            while (fila.length > 10) {
                let index = Math.floor(Math.random() * fila.length);
                if (fila[index] === '') {
                    fila.splice(index, 1);
                }
            }
        tabla.push(fila)
        }
    return makeShipsOnBoard(tabla)
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

for (i=0;i<Object.keys(barcos).length;i++){
    console.log(i)
}



