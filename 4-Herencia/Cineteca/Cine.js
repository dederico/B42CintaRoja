// Destructuring - destructuracion
// const objeto = {
//   a: 1,
//   b: "hola",
//   letra: "valor del letra",
//   caballo: "Veloz",
// };
// const b = objeto.b;
// const a = pbjeto.a;

// const { letra, caballo } = ojeto;

class Cine {
  constructor(cadena, nombre, ciudad, ubicacion, capacidad) {
    this.cadena = cadena;
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.ubicacion = ubicacion;
    this.capacidad = capacidad;
  }
  reproducir()
};

class Cineteca {
  constructor() {}
}
module.exports = {
  Cine,
  Cineteca,
};
