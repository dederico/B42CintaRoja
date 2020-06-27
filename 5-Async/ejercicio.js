// 1. - Muestra un mensaje mediante un callback.
// La función de orden superior que escribas debe poder mostrar el mensaje como
// console.warn, console.info, o cualquier método para pintar en consola del objeto console.
function funcionDeOrdenSuperior() {
  const callback = () => {};
  console.info("este es un mensaje");
  return callback;
}
funcionDeOrdenSuperior();

// 2. - Hacer un arreglo de 4 cantidades de tiempo(en minutos)
// EJEMPLO[120, 80, 200, 100]
// y tomar solo las cantidades
// mayores a dos horas(hacer la comparación en horas)
// mediante un callback.
const arreglo = [190, 240, 60, 440];
console.log(arreglo);

function arregloEnHoras() {
  const resultado = Array.from(arreglo, (x) => x / 60);
  return resultado;
}
arregloEnHoras();
console.log(arregloEnHoras());

function esSuficientementeGrande(elemento) {
  return elemento >= 2;
}
var filtrados = arregloEnHoras().filter(esSuficientementeGrande);

esSuficientementeGrande();
console.log(filtrados);

// const resultado = arregloEnHoras;
// const horas = resultado.filter(resultado => 2);
// horas();

// function resultado2(elemento) {
//   return elemento >= 2;
// }
// var filtrados = arregloEnHoras.filter(resultado2);
// return console.log(elemento);

// const compararHoras = (arreglo) => {
//   if (Array.from(arreglo, (x) => x / 60) > 2) {
//     console.log("entre");
//   } else {
//     console.log("estoy en else");
//   }

//   return arreglo;
// };
// compararHoras(arreglo);
// const compararHoras = (arreglo) => {
//return nuevoArreglo;
// }
//const mayorQueDosHoras =(arreglo,callback) => {
// return arregloFinal;
// }
// const arreglo = [200, 300, 100, 60];
// mayorQueDosHoras(arreglo,compararHoras)
