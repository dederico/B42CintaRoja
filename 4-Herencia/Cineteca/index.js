const { Cine } = require("./Cine");
const { Documental } = require("./Documental");
const { Pelicula } = require("./Pelicula");

const cinemex = new Cine(
  "Cinemex",
  "Cinemex Reforma",
  "CDMX",
  "Avenida Paseo De La Reforma",
  500
);
const cinepolis = new Cine(
  "Cinepolis",
  "Cinepolis Esfera",
  "Monterrey",
  "Plaza Esfera",
  1300
);
const documental1 = new Documental("Cosmos", 125, "Noruega", "Existe", "Si");

console.log(cinemex.reproducir(documental1));

const peliculaFavorita = new Pelicula(
  "La Dama y el Vagabundo",
  "A",
  68,
  "Estados Unidos",
  "Existe",
  "Si"
);
console.log(cinemex.reproducir(peliculaFavorita));

console.log(cinepolis.reproducir(peliculaFavorita));

// console.log(`Bienvenidos a ${this.cinemex} gracias por visitarnos`);
// reproducir el documental de Cosmos
// reproducir
// cinemex.reproducir(documental);
// reproducir su pelicula favorita

// console.log(cinemex);
