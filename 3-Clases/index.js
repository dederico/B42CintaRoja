// Objeto literal
const carro = {
  color: "rojo",
  velocidad: 30,
  ruedas: 4,
  motor: "v6",
  arranca() {
    console.log("run run");
  },
  frena() {
    console.log("iiiii");
  },
  dobla() {
    console.log("el carro esta doblando");
  },
};

// Clase
// va a ser la plantilla para hacer objetos.
// tener la palabra reservada class

class Carro {
  constructor(duenio, color, velocidad, ruedas, motor, tipoRueda) {
    //inicializar variables
    this.duenio = duenio;
    this.color = color;
    this.velocidad = velocidad;
    this.ruedas = ruedas;
    this.motor = motor;
    this.tipoRueda = tipoRueda;
    this.vendido = false;
  }

  arranca() {
    // if (this.vendido) {
    //     console.log('El carro de' ${ this.duenio })
    console.log("run run");
  }
  frena() {
    console.log("iiiii");
  }
  dobla() {
    console.log("el carro esta doblando");
  }
}

class Rueda {
  constructor(rin, rodada) {
    //inicializar variables
    this.rin = rin;
    this.rodada = rodada;
  }
}
//Carro.constructor();
//opcion 1 para crear un carro con tipo de rueda
const carro1 = new Carro("rojo", 30, 4, "v6", new Rueda("aluminio", 32));
//opcion 2 para crear un carro con tipo de rueda
const tipoRueda = new Rueda("aluinio", 32);
const carro2 = new Carro("rojo", 30, 4, "v6");

// snake-case => Snake case
// camelCase => Camel case

// console.log(carro);
// console.log(carro1);
console.log(carro1.tipoRueda.rodada);
console.log(carro2.tipoRueda.rodada);

carro2.precio = 200000;
carro1.arranca();
carro2.vendido = true;
// console.log(carro1.arranca());
carro2.arranca();
