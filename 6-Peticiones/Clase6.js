const request = require("request");

function getNameByIdPeople() {
  const URL = `https://swapi.dev/api/people/`;
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
request("https://swapi.dev/api/people/", getNameByIdPeople);

// const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1/";

// function postCreateAuthor(nombre, apellido, biografia, genero, edad) {
//   const URI = "authors/";
//   const URL = URL_BASE + URI;

//   const jsonSend = {
//     name: nombre,
//     last_name: apellido,
//     nacionalidad: "MX",
//     biography: biografia,
//     gender: genero,
//     age: edad,
//   };

//   return new Promise((resolve, reject) => {
//     request.post({ url: URL, form: jsonSend }, (err, response, body) => {
//       if (response.statusCode === 201) {
//         const json = JSON.parse(body);
//         resolve(json);
//       } else {
//         reject(response.statusCode);
//       }
//     });
//   });
// }

// postCreateAuthor("Nombre", "Apellidos", "Biografia", "F", 89)
//   .then((author) => console.log(author.id))
//   .catch((err) => console.log(err));
