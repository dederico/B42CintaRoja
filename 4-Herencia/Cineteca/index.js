const { Cine } = require("./Cine");
const { Documental } = require("./Documental");
const { Pelicula } = require("./Pelicula");

const cinemex = new Cine(
  "Cinemex",
  "Cinemex Reforma",
  "CDMX",
  "Avenida Paseo De La Reforma",
  "500 personas"
);
// reproducir el documental de Cosmos
// reproducir
// cinemex.reproducir(documental);
// reproducir su pelicula favorita
console.log(cinemex);