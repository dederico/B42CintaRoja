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

frequent();
function frequent() {
  const frequente = [3, 2, 3, 3, 2, 4, 9, 3];
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < frequente.length; i++) {
    for (let j = i; j < frequente.length; j++) {
      if (frequente[i] == frequente[j]) m++;
      if (mf < m) {
        mf = m;
        item = frequente[i];
      }
    }
    m = 0;
    console.log(`${item} ( ${mf} times) `);
  }
  return frequente; //console.log(`${item} ( ${mf} times ) `);
}
