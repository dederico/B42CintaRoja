function funcionCualquiera(callback) {
  let texto = "por primera vez";
  console.log(callback(texto));

  setTimeout(() => {
    console.log("Se ejecuto el setTimoeut");
  }, 3000);
  texto = "por segunda vez";
  console.log(callback(texto));
}
funcionCualquiera((texto) => {
  return "me estoy ejecutando" + texto;
});
