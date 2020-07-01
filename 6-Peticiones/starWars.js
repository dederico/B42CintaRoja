const request = require("request"); // importe a request

function getNameByIdPeople(idPeople) {
  const URL = `https://swapi.dev/api/people/${idPeople}/`;
  request.get(URL, (error, response, body) => {
    console.log(`Status code ----> ${response.statusCode}`);
    const respuestaBody = JSON.parse(body);
    if (response.statusCode === 200) {
      console.log("Petición Correcta");
      console.log(respuestaBody.name);
    } else {
      console.log("Peticion incorrecta");
      console.log(respuestaBody.detail);
    }
  });
}

getNameByIdPeople();

function getStarWars(error, response, body) {
  if (response.statusCode === 200) {
    console.log(response.statusCode); // creo la funcion de getStarWars con el if ===200
    // JSON.stringify() // de JSON a Cadena
    // JSON.parse() // cadena a JSON
    // console.log(JSON.parse(body).unique_unit);
    const newBody = JSON.parse(body); // convierto lo recibido
    console.log(newBody).name; // imprimo para probar
  }
  //   function getNameByIdPeople2() {
  //     const URL = `https://swapi.dev/api/people/`;
  //     console.log(getNameByIdPeople2());
  //     request.get(URL, (error, response, body) => {
  //       console.log(`Status code ----> ${response.statusCode}`);

  //       request(URL, getStarWarsCharacter);
  //     });
  //     //
  //   }
  //   getNameByIdPeople2();
  // }
  // const objeto2 = JSON.parse(newBody);
  // console.log(objeto2);
  function getStarWarsCharacter(error, response, body) {
    if (response.statusCode === 200) {
      const newBody = JSON.parse(body);
      console.log(`Es el personaje ${newBody.name}`);
    }
  }
}
//     var result = Object.values(newBody.name);
//     console.log(result);
//     var personas = [];
//     console.log(newBody.name);

//     result.forEach((persona, index) => {
//       var nombre = Object.entries(persona, index);
//       nombre.forEach((persona, index) => {
//         var nombreDePersonaje = persona[1][index].name;
//         cosole.log(nombreDePersonaje);
//       });
//     });
//   }
// }
request(`http://swapi.dev/api/people/`, getStarWars);

//   const [url] = newBody.unique_unit;
//   // cierre de paréntesis :v
//   console.log(response.statusCode);
//   // request()
//   request(url, getOneUnit);
//   // ¿Cómo le haría para traer la siguiente oración por medio de peticiones?
// }
// /*
// // recibe 3 los elementos, y su nombre de grupo
// // devolver un arreglo y el numero de elementos en un arreglo [arreglo de Objetos, numero de Elementos]
// function crearArreglo();

// const [arreglo, numero] = crearArreglo('Mali','B42 de roja','Al batch de gera con gera');
// const [arregloDeFrutas, noDeFrutas] = crearArreglo('Pera','manzana','melon');

// // Destructuración de arreglos.
//     const arreglo = ['helado','natilla','papas'];
//     // forma común
//     const numero1 = arreglo[1];
//     // forma nice
//     const [,n1,] = arreglo;
//     console.log(n1);
// */

// function getOneUnit(error, response, body) {
//   if (response.statusCode === 200) {
//     const newBody = JSON.parse(body);
//     console.log(
//       `Es la unidad ${newBody.name} que se describe como ${newBody.description}`
//     );
//   }
//   // ¿Cómo le haría para traer la siguiente oración por medio de peticiones*/
