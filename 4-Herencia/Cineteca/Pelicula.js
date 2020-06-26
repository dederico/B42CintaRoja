// Agregar 1 metodo y dos caracteristicas extras diferentes de las de largometraje y documental
const { Largometraje } = require("./Largometraje");

class Pelicula extends Largometraje {
  constructor(titulo, clasificacion, duracion, pais, resenia, cortometraje) {
    super(titulo, clasificacion, duracion, pais);
    this.resenia = resenia;
    this.cortometraje = cortometraje;
  }
  // metodo de getReproducir para poder reproducir los largometrajes
  //(Se que no va aqui, se que va en index, pero quiero resolver esa parte de una vez)
  getReproducir() {
    const reproducir = () => {
      reproducir = this.titulo.largometrajePelicula;
      return console.log(
        `Hola, Bienvenido a ${this.titulo}, estaras aca ${this.duracion} ya visitaste la dulceria?`
      );
    };
    // creo una nueva pelicula
    const largometrajePelicula = new Pelicula(
      "Mi primer pelicula",
      "A",
      98,
      "Mexico",
      "existe",
      "dipsonible"
    );
    getReproducir(largometrajePelicula);
    console.log(getReproducir());
  }
}

// console.log(largometrajePelicula);
module.exports = {
  Pelicula,
};
