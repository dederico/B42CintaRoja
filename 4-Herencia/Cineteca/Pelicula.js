// Agregar 1 metodo y dos caracteristicas extras diferentes de las de largometraje y documental
const { Largometraje } = require("./Lagometraje");

class Pelicula extends Largometraje {
  constructor(clasificacion, duracion, pais, resenia, cortometraje) {
    super(clasificacion, duracion, pais);
    this.resenia = resenia;
    this.cortometraje = cortometraje;
  }
  comerciales() {
    console.log();
  }
}

const largometrajePelicula = new Pelicula(
  "A",
  98,
  "Mexico",
  "existe",
  "dipsonible"
);
console.log(largometrajePelicula);
module.exports = {
  Pelicula,
};
