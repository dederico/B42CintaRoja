// Clase padre
class Largometraje {
  constructor(titulo, clasificacion, duracion, pais) {
    this.clasificacion = clasificacion;
    this.duracion = duracion;
    this.pais = pais;
    this.titulo = titulo;
  }
}
module.exports = {
  Largometraje,
};
// Crear un largometraje
const largometraje1 = new Largometraje(
  "Pedro y el Lobo",
  "PG-13",
  80,
  "Inglaterra"
);
//imprime el largometraje
console.log(largometraje1);
