// Agregar 1 metodo y dos caracteristicas extras diferentes de las de largometraje y documental
const { Largometraje } = require("./Lagometraje");

class Pelicula extends Largometraje {
  constructor(clasificacion, duracion, pais, resenia, cortometraje) {
    super(clasificacion, duracion, pais);
    this.resenia = resenia;
    this.cortometraje = cortometraje;
  }
  respirar() {
    console.log();
  }
}

const pelicula1 = new Largometraje("A", 98, "Mexico", true, true);
console.log(pelicula1);
