// importe Electrodomestico
const { Electrodomestico } = require("./Electrodomestico");
// Ejercicios de Clases.
//     a) Crear una clase Bebida que herede a dos clases Cerveza  y Refresco.
// Ambas clases deben tener la propiedad  cantidad(ml).
// La clase Refresco debe tener el atributo azucar(g) y la clase Cerveza debe el atributo
// porcentajeAlcohol
//     **** Crear los getters y setters correspondientes, recordemos que apegandonos al paradigma
// se debe hacer un getter y un setter por propiedad.
//     Ejemplo:
// getAzucar(){
//     return this.azucar;
// }
// setAzucar(azucar){
//     this.azucar = azucar;
// }
class Bebida {
  constructor(envase, cantidad, precio) {
    this.envase = envase;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}

class Cerveza extends Bebida {
  constructor(nombre, porcentajeDeAlcohol, envase, cantidad, precio) {
    super(envase, cantidad, precio);
    this.nombre = nombre;
    this.porcentajeDeAlcohol = porcentajeDeAlcohol;
  }
  setPresentacion(presentacion) {
    this.presentacion = presentacion;
  }
  getCuenta() {
    const cuenta = this.precio * this.cantidad;
    console.log("Tu cuenta es de");
    return cuenta;
  }
}

//       this.consumo = this.consumo + pedidas;

//     return this.consumo;
//   }
// }

const cartaBlanca = new Cerveza("Carta-Blanca", 2, "vidrio", 9, 25);
console.log(cartaBlanca);

console.log(cartaBlanca.getCuenta());
//
//
//
class Refresco extends Bebida {
  constructor(nombre, envase, cantidad, precio, azucar) {
    super(envase, cantidad, precio);
    this.nombre = nombre;
    // this.azucar = azucar;
  }

  // set msg(x) {
  //   this.#msg = `hello ${x}`;
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes/Class_fields

  setAzucar(azucar) {
    this.azucar = azucar;
  }
  getAzucar() {
    if (this.azucar > 20) {
      console.log(
        `No puedes consumir, tu ${this.nombre} tiene ${this.azucar} gramos de azucar`
      );
    } else {
      console.log(
        `Puedes consumir, tu ${this.nombre} tanquil@, solamente tiene ${this.azucar} gramos de azucar`
      );
    }
    return this.azucar;
  }
}

//const instance = new ClassWithGetSet();
//instance.msg = 'cake';
//console.log(instance.msg);

const cocaCola = new Refresco("Coca-Cola", "Plastico", 600, 14, 40);

cocaCola.azucar = 10;
console.log(cocaCola.azucar);

console.log(cocaCola);
console.log(cocaCola.getAzucar());

// b)
// I ) Crea una superclase llamada Electrodoméstico con las
// siguientes características:
// a.Sus atributos son precio, color, consumoEnergetico
// y capacidad(peso máximo)
// b.El constructor solo debe pedir precio, color
// y capacidad.
//     c.consumoEnergetico debe iniciar con valor de 100

// II ) Crea una subclase de Electrodomestico llamada Lavadora
// con las siguientes características:
// a.Su atributo es carga(kg de ropa), además de los
// atributos heredados.
//     b.Crea el método precioFinal().Este se calcula
// multiplicando el consumoEnergetico por la carga.

class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, consumoEnergetico, carga) {
    super(precio, color, capacidad);
    this.carga = carga;
    this.consumoEnergetico = consumoEnergetico;
  }
  setPrecioFinal() {
    this.precioFinal = precioFinal;
  }
  getPreciofinal() {
    const precioFinal = this.consumoEnergetico * this.carga;
    return precioFinal;
  }
}

const whirlpool = new Lavadora(25, "blanca", 13, 500, 20);
console.log(whirlpool);
console.log(whirlpool.getPreciofinal());
