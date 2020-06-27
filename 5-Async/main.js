function getUsuarios(callback, exito) {
  const usuarios = [
    {
      name: "Mali",
    },
    {
      name: "Eusebio",
    },
    {
      name: "Ernesto",
    },
  ];
  //simular consultar API
  setTimeout(() => {
    // status code
    if (exito) {
      callback(usuarios, "200 todo chido");
    } else {
      callback(usuarios, "404 nada chido");
    }
  }, 3000);
}
const recibirUsuarios = (users, mensaje) => {
  console.log(users, mensaje);
};
const recibirUsuarios = (users, mensaje) => {
  console.log(users, mensaje);
};
/// getUsuarios (funcion callback (usuarios,mensaje))
getUsuarios(recibirUsuarios, true);
getUsuarios((users, mensaje) => {
  console.log(users, mensaje);
}, true);

//Array
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map((elementoActual) => {
  console.log(elementoActual);
  return elementoActual * 2;
});
