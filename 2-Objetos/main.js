const objeto = {
  nombre: "",
  edad: 0,
  metodo() {
    return 22;
  },
};

objeto.metodo; // metodo() {return 22;}
objeto.metodo(); // devolver 22
objeto.nuevaPropiedad = "valor de la nueva propiedad";

console.log(objeto);

const persona1 = {
  name: "Mali",
  age: 21,
  isHuman: true,
  getAge() {
    return this.age;
  },
  // SetAge() {
  //     return
  // }
};

const evaluateNumber = (number) => {
  if (number % 5 == 0 && number % 11 == 0) {
    return console.log("true");
  } else {
    return console.log("false");
  }
};
evaluateNumber(55);
evaluateNumber(2);
evaluateNumber(3);

// const country = ["Mexico", "Panama", "Guatemala", "El Salvador"];
// const mexico = ["Mexico"];
// const panama = ["Panama"];
// const guatemala = ["guatemala"];
// const elSalvador = ["El salvador"];

function longestCountry(country) {
  return country.reduce(function (lname, country) {
    return lname.length > country.length ? lname : country;
  }, "");
}
console.log(longestCountry(["Mexico", "Panama", "Guatemala", "El Salvador"]));

const evaluateNumber1 = (number) => {
  if (number % 5 == 0 && number % 11 == 0) {
    let resultado = true;
    return console.log(resultado);
  } else number % 5 != 0 && number % 11 != 0;
  {
    let resultado = false;
    return console.log(resultado);
  }
};
evaluateNumber1(55);
evaluateNumber1(7);
