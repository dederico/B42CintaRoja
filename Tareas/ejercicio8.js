//Crea una funcion llamada frequent()
//que recibirá de parámetro un arreglo con distintos números,
//retornar el elemento más frecuente dentro del arreglo.

// function frequent(fecha) {
//   var masFrecuente = fecha[0],
//     masFrecuenteObj = new Date(fecha[0]);
//   fecha.forEach(function (dt, index) {
//     if (new Date(dt) > masFrecuenteObj) {
//       masFrecuente = dt;
//       masFrecuenteObj = new Date(dt);
//     }
//   });
//   return masFrecuente;
// }
// console.log(frequent(["45", "78", "890"]));

// function frequent() {
//   var getMax = frequent("32452345234534980");
//   {
//     var max = 0,
//       maxChar = "";
//     str.split("").forEach(frequent(char));
//     {
//       if (str.split(char).length > max) {
//         max = str.split(char).length;
//         maxChar = char;
//       }
//     }
//     return maxChar;
//   }
// }
// getMax(13423413513242);

// frequent();
// function frequent() {
//   const frequente = [3, 2, 3, 3, 2, 4, 9, 3];
//   let mf = 1;
//   let m = 0;
//   let item;
//   for (let i = 0; i < frequente.length; i++) {
//     for (let j = i; j < frequente.length; j++) {
//       if (frequente[i] == frequente[j]) m++;
//       if (mf < m) {
//         mf = m;
//         item = frequente[i];
//       }
//     }
//     m = 0;
//     console.log(`${item} ( ${mf} times) `);
//   }
//   return frequente; //console.log(`${item} ( ${mf} times ) `);
// }

// const frequent = () => {
//   let arreglo = [];
// };
// console.log(frequent);

// pseudocodigo

//inicializar variables
let arreglo = [
  3,
  4,
  2,
  6,
  7,
  8,
  3,
  4,
  5,
  3,
  4,
  3,
  3,
  2,
  1,
  2,
  3,
  3,
  9,
  2,
  2,
  2,
  9,
  2,
  2,
]; // arreglo es igual a un arreglo de numeros

// funcion que se llame frequent
function frequent1(arreglo) {
  var counter = 0; // en la primer vuelta counter es 7
  var currCounter = 0; // en la segunda vuelta currCounter es 4
  var itemwithmaxFreq;
  // tomamos el tercer número, 2
  arreglo.forEach((item) => {
    // item = 2
    arreglo.forEach((item2) => {
      // item2 = 3
      if (item === item2) {
        // cada que el numero aparece, aumentamos el curr counter
        currCounter++;
      }
    });
    //
    if (currCounter >= counter) {
      // si currCounter supera a counter (número almacenado)
      // significa que ese número fue mayor que el pasado
      // guardamos ese númeroen variable itemwithmaxFreq
      itemwithmaxFreq = item;
      // counter es el nuevo número a superarse, lo actualizamos
      counter = currCounter;
    }
    // reiniciamos la variable para volver a analizar el sig número
    currCounter = 0;
  });
  console.log(itemwithmaxFreq);
}
frequent1(arreglo);
