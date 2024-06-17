/* eslint-disable */
import "../style.scss";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#bot").addevenlisteners("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateexcuse();
  });
  console.log("Hello Rigo from the console!");
};
// Arrays de opciones
const culpables = [
  "mi perro",
  "mi hermana",
  "mi vecino",
  "mi jefe",
  "mi amigo",
];

const acciones = [
  "comió mi tarea",
  "rompió la ventana",
  "borró mi trabajo",
  "apagó mi despertador",
  "perdió mi celular",
];

const evitar = [
  "una reunión importante",
  "una cita",
  "un examen",
  "una tarea urgente",
  "un compromiso social",
];

function generarExcusa() {
  const culpable = culpables[Math.floor(Math.random() * culpables.length)];
  const accion = acciones[Math.floor(Math.random() * acciones.length)];
  const motivo = evitar[Math.floor(Math.random() * evitar.length)];

  // Obtener una referencia de tiempo aleatoria
  const tiempos = [
    "ayer",
    "la semana pasada",
    "anoche",
    "hace un momento",
    "en la mañana",
  ];
  const tiempo = tiempos[Math.floor(Math.random() * tiempos.length)];

  return `Lo siento, no pude asistir porque ${culpable} ${accion} para evitar ${motivo} ${tiempo}.`;
}

console.log(generarExcusa());
