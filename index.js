const ROWS = 10
const COLS = 10

const barcos = {
    portavion: ['🛥','🛥','🛥','🛥','🛥'],
    buque: ['🛥','🛥','🛥','🛥'],
    submarino: ['🛥','🛥','🛥'],
    crucero:['🛥','🛥'],
    lancha: ['🛥']
}

const tablero2= ['','','','','','','','','','',]
let board = []

for(let i = 0; i < ROWS; i++) {
        // una fila cualquiera
        let row = []
        // por cada columna
        for(let j = 0; j < COLS; j++) {
            //console.log(j, i)
            row[j] = tablero2[i]
        }
        board[i] = row
    }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }


board[getRandomInt(10)][getRandomInt(10)] = barcos.portavion
board[getRandomInt(10)][getRandomInt(10)] = barcos.buque
board[getRandomInt(10)][getRandomInt(10)] = barcos.submarino
board[getRandomInt(10)][getRandomInt(10)] = barcos.submarino
board[getRandomInt(10)][getRandomInt(10)] = barcos.crucero
board[getRandomInt(10)][getRandomInt(10)] = barcos.crucero
board[getRandomInt(10)][getRandomInt(10)] = barcos.crucero
board[getRandomInt(10)][getRandomInt(10)] = barcos.lancha
board[getRandomInt(10)][getRandomInt(10)] = barcos.lancha
board[getRandomInt(10)][getRandomInt(10)] = barcos.lancha


let boardMezclado = ''
boardMezclado = board.flat(elemento=>elemento)

let tabla = []
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
console.table(tabla)



