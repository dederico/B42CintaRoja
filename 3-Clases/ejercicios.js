// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
// 	 Generar el RFC a partir de el nombre, edad y sexo
class Persona {
  constructor(nombre, edad, RFC, sexo, peso, altura) {
    //inicializar variables
    this.nombre = nombre;
    this.edad = edad;
    this.RFC = RFC;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }
  getAge() {
    this.fechaNacimiento;
    //diferencia de fecha de nacimiento al dia de hoy
  }
  esMayorDeEdad() {
    // getAge()
  }
  getIMC() {
    return this.peso / this.altura;
  }
  getEsMayorDeEdad() {
    if (this.edad >= 18) {
      return "Es mayor de edad";
    } else {
      return "Es menor de edad";
    }
  }
  getRFC() {
    return this.nombre + this.edad + this.sexo;
  }
}
const federico = new Persona(
  "Federico Gonzalez",
  35,
  "GODF8411135Y3",
  "masculino",
  92,
  1.78
);
console.log(federico);
console.log("IMC es", federico.getIMC());
console.log(federico.getEsMayorDeEdad());
console.log("RFC es", federico.getRFC());

// 2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad, estado
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta {
  constructor(titular, cantidad, estado) {
    //inicializar variables
    this.titular = titular;
    this.cantidad = cantidad;
    this.estado = estado;
  }
  //   Ingresar() {
  //     let Ingresar = this.cantidad + cantidadAIngresar;

  getIngresar(ingreso) {
    return this.cantidad + ingreso;
  }
  getRetirar(retiro) {
    return this.cantidad - retiro;
  }
}

const CuentaAfirme = new Cuenta("Federico Gonzalez", 900, "activa");

console.log(CuentaAfirme);
console.log(CuentaAfirme.getIngresar(20));
// QUISIERA SABER COMO HACERLE PARA QUE SE 'GUARDE' LA NUEVA CANTIDAD
CuentaAfirme.getIngresar(20);
console.log(CuentaAfirme);
console.log(CuentaAfirme.getRetirar(20));
