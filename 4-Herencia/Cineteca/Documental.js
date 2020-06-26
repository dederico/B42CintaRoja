const { Largometraje } = require("./Lagometraje");

class Documental extends Largometraje {
  constructor(clasificacion, duracion, pais, resenia, cortometraje) {
    super(clasificacion, duracion, pais);
    this.resenia = resenia;
    this.cortometraje = cortometraje;
  }
}
const documental1 = new Documental("A", 98, "Mexico", true, true);
console.log(documental1);
