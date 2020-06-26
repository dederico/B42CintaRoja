class Animal {
  constructor(ojos, boca, extremidades) {
    this.ojos = ojos;
    this.boca = boca;
    this.extremidades = extremidades;
  }
  respirar() {
    console.log("snif");
  }
}
// new Animal(2,1,4);
class Persona extends Animal {
  constructor(ojos, boca, extremidades, idioma) {
    super(ojos, boca, extremidades);
    this.idioma = idioma;
  }
  pensar() {
    console.log("Estoy pensando");
  }
  hablar() {
    console.log("bla bla bla");
  }
}

// new Persona ()

class Mascota extends Animal {
  //super va a equivaler a una instancia del objeto de la clase que
  //heredamos que se une con los nuevos atributos y metodos de la nuva clase.
  // const super = new Animal();
  // super.respirar();
  constructor(ojos, boca, extremidades, duenio) {
    super(ojos, boca, extremidades);
    this.duenio = duenio;
    this.estaDomesticado = true;
  }
  respirar() {
    console.log("Respiro como mascota");
  }
}
class Perro extends Mascota {
  constructor() {
    super(ojos, boca, extremidades, duenio);
  }
}
const persona1 = new Persona(2, 1, 4, "espaniol");
console.log(persona1);
const mascota = new Mascota(2, 1, 5, "Mali");
mascota.respirar();

// crear un animal

const animal = new Animal(2, 1, 4);
const animalPersona = new Persona(2, 1, 4, "espaniol");
const animalMascota = new Mascota(2, 1, 5, "Mali");

// CINE
