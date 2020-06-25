/*
Tipos de datos
Tipado

Tipos

string: Cadena de caracteres / palabra
number: Numero (float, integer)
boolean: Booleanos (true, false)
*** truthy falsy
object: Objeto {}
objeto : Arrego []

undefined: la ausencia de un valor
nan
infinity
null : esto no tiene definido una estructura pero existe 

*/

/* Hoisiting */

var numero = 1;

console.log(typeof numero);

gritar();
function gritar() {
  console.log("Aaaaaaaa!", this);
}
/* ECMA Script 6 */

/* Actulizar y reagisnar (cambiar tipo de dato) */
let nombreL = "";
nombreL = "Mali";
nombreL = {};

/* No te permite reasignar */
const persona = {
  nombre: "Mali",
};

persona.nombre = "Edwin";

console.log(persona, nombreL);

const mascotas = ["Rayas", "Mocka", "Cosa"];
mascotas.push("Paloma");
console.log(mascotas);

function nombreFuncion() {
  //function this
}
let variableLet = "valor";
// Definicion de una funcion
const nombreArrowFunction = () => {
  // todo el archivo this
  console.log(variableLet);
};
// ejecucion de la funcion
nombreArrowFunction();
/// * Estructuras de control */
/*
 for 
 for each
 while do
 if else
 switch

 */
const a = "3";

if (a === "1") {
  // bloque de lineas de codigo dentro del if
} else if (a === "2") {
  // bloque de lineas de codigo dentro del if
} else if (a === "3") {
  // bloque de ...
}

switch (a) {
  case "1":
    // lineas de codigo del switch 1
    break;
  case "2":
    // lineas de codigo del switch 2
    break;
  case "3":
    // lineas de codigo del switch 3
    break;
  default:
    // lineas de codigo que se ejecutan cuando ninguno de los casos de arriba se cumplio
    break;
}

const devolverValores = () => {
  let contador = 0;
  while (true) {
    // contador = contador +1;
    // contador += 1;
    contador++;
    if (contador === 4) {
      break;
    }
  }
  contador = contador > 4 ? contador + 3 : contador--;
  return `La cantidad de veces que se conto es ${contador}`;
};

devolverValores();

console.log(1 / 0);
console.log(0 / 0);

// Arrow function
() => {};
(parametro) => {};
(parametro) => "Algo";

// const nombreArrow (parametro1, parametro2) => { };

/* Agrupar informacion por funcionalidades */
const nombreAmigo = "Hugo";

const devolverTiposDeDatos = () => {
  //ARROW FUNCTION
  nombreAmigo;
};

// Arrow//
const farenheitToCelsius2 = (grados) => (grados - 32) * (5 / 9);

console.log(farenheitToCelsius2(89));
