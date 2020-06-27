// var array = [1, 1, 1, 9, 3, 1900, 50000, 0, null, false, undefined];

// function cleanArray(array, item) {
//   var i = array.indexOf(item);

//   if (i !== -1) {
//     array.splice(i, 1);
//   }
//   const newArrayQuitaNull = cleanArray(array, null);
//   const newArrayQuita0 = cleanArray(array, 0);
//   const newArrayQuitaFalse = cleanArray(array, false);
//   const newArrayQuitaUndefined = cleanArray(array, undefined);

//   return console.log("Aqui corri");
// }
// // console.log(array);

// const newArray =
//   newArrayQuita0 +
//   newArrayQuitaFalse +
//   newArrayQuitaNull +
//   newArrayQuitaUndefined;

// console.log(newArray);

// const cleanArray = (array, item) => {
//   var i = array.indexOf(item);
//   i !== -1 && array.splice(i, 1);
//   return console.log(i);
// };
// let item = [1, 0, 9, 3, 90];
// let array = [1, 1, 9, 3, 90];
// console.log(array, item);
// cleanArray(array, 1, 90);
// cleanArray(item, 1);
// console.log(array, item);
// var array = [1, 1, 1, 9, 3, null, 0];
// console.log(array);
// const cleanArray = () => {
//   array.forEach((elem, index) => {
//     switch (elem) {
//       case null:
//         elem === "null";
//         console.log(
//           "found element to remove, hay un elemento igual a null" +
//             array.splice(index, 1)
//         );
//         break;
//       case 0:
//         elem === "0";
//         console.log(
//           "found element to remove, hay un elemento igual a 0" +
//             array.splice(index, 1)
//         );
//         break;
//       case false:
//         elem === false;
//         console.log(
//           "found element to remove, hay un elemento igual a false" +
//             array.splice(index, 1)
//         );
//         break;
//       case undefined:
//         elem === undefined;
//         console.log(
//           "found element to remove, hay un elemento igual a undefined" +
//             array.splice(index, 1)
//         );
//         break;

//       default:
//         console.log("not found any 0, null, undefined, or false values");
//         break;
//     }
//   });
//   console.log(array);
// };
// cleanArray(array);

// var array = [1, 1, 1, 9, 3, null, 0];
// console.log(array);
// const cleanArray = (array) => {
//   const arregloFiltrado = array.filter((elem) => {
//     const resultado =
//       elem !== 0 &&
//       elem !== null &&
//       elem !== false &&
//       elem !== "" &&
//       elem !== undefined;
//     return resultado;
//   });
//   return arregloFiltrado;
// };

const cleanArray = (array) => {
  const arregloFiltrado = array.filter((elem) => {
    const resultado =
      elem !== 0 &&
      elem !== null &&
      elem !== false &&
      elem !== "" &&
      elem !== undefined;
    return resultado;
  });
  return arregloFiltrado;
};

//     switch (elem) {
//       case null:
//         array.indexOf(index) === null;
//         console.log(
//           "found element to remove, hay un elemento igual a null" +
//             array.splice(index, 1)
//         );
//       // break;
//       case 0:
//         array.indexOf(index) === 0;
//         console.log(
//           "found element to remove, hay un elemento igual a 0" +
//             array.splice(index, 1)
//         );
//       // break;
//       case false:
//         array.indexOf(index) === false;
//         console.log(
//           "found element to remove, hay un elemento igual a false" +
//             array.splice(index, 1)
//         );
//         break;
//       case undefined:
//         elem === undefined;
//         console.log(
//           "found element to remove, hay un elemento igual a undefined" +
//             array.splice(index, 1)
//         );
//         break;

//       default:
//         console.log("not found any 0, null, undefined, or false values");
//         break;
//     }
//   });
//   return array;
// };

console.log(cleanArray(array));
