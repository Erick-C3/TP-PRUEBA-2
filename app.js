// Carrera por la Snitch Dorada

let filas = 3;
let columnas = 30;

let jugadores = [
  { nombre: "H", fila: 0, pos: 0 },
  { nombre: "R", fila: 1, pos: 0 },
  { nombre: "D", fila: 2, pos: 0 }
];

let filaSnitch = Math.floor(Math.random() * filas);
let posSnitch = 27;

let ganador = "";
let turnos = 0;

while (ganador == "" && turnos < 50) {

  console.clear();

  // matriz
  let campo = [];

  for (let i = 0; i < filas; i++) {
    campo[i] = [];

    for (let j = 0; j < columnas; j++) {
      campo[i][j] = "| |";
    }
  }

  // mover jugadores
  for (let i = 0; i < jugadores.length; i++) {

    let velocidad = 1;

    if (jugadores[i].pos <= 20) {
      velocidad = Math.floor(Math.random() * 2) + 1;
    }

    jugadores[i].pos += velocidad;

    if (jugadores[i].pos >= columnas) {
      jugadores[i].pos = columnas - 1;
    }

    // verificar ganador
    if (
      jugadores[i].fila == filaSnitch &&
      jugadores[i].pos >= posSnitch
    ) {
      ganador = jugadores[i].nombre;
    }

    campo[jugadores[i].fila][jugadores[i].pos] =
      "|" + jugadores[i].nombre + "|";
  }

  // mover snitch de fila
  filaSnitch = Math.floor(Math.random() * filas);

  campo[filaSnitch][posSnitch] = "|S|";

  // mostrar campo
  for (let i = 0; i < filas; i++) {

    let linea = "";

    for (let j = 0; j < columnas; j++) {
      linea += campo[i][j];
    }

    console.log(linea);
  }

  console.log("\nTurno:", turnos + 1);

  turnos++;
}

// resultado final
if (ganador != "") {
  console.log("\nGanador:", ganador);
} else {
  console.log("\nNo hay ganador");
}