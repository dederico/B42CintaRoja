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
class Persona {
  constructor(ojos, boca, idioma) {
    this.ojos = ojos;
    this.boca = boca;
    this.extremidades = 4;
    this.idioma = idioma;
  }
  respirar() {
    console.log("snif");
  }
  pensar() {
    console.log("Estoy pensando");
  }
  hablar() {
    console.log("bla bla bla");
  }
}
// mascota (perro y gato)
class Mascota {
  constructor(ojos, boca, extremidades, duenio) {
    this.ojos = ojos;
    this.boca = boca;
    this.extremidades = extremidades;
    this.duenio = duenio;
    this.estaDomesticado = true;
  }
  respirar() {
    console.log("snif");
  }
}
