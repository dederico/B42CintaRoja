// importe Largometraje
const { Largometraje } = require("./Largometraje");
// creo una clase "hija", que recibira la herencia de Largometraje
class Documental extends Largometraje {
  constructor(clasificacion, duracion, pais, resenia, cortometraje) {
    // Agrego 2 nuevas caracteristicas resenia, y cortometraje
    super(clasificacion, duracion, pais); // en super nombro las caracteristicas del padre
    // enlisto las caracteristicas nuevas
    this.resenia = resenia;
    this.cortometraje = cortometraje;
  }
}
// Creo un nuevo documental con las caracteristicas del Largometraje y le doy valor de true a resenia y cortometraje
const documental1 = new Documental("A", 98, "Mexico", true, true);
console.log(documental1);
