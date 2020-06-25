const time = () => {
  let velocidad = 73000 / 1000;
  let distancia = 120;
  return Number((distancia / velocidad).toFixed(2));
};
console.log(time());

function time1() {
  let velocidad = 73000 / 1000;
  let distancia = 120;
  return Number((distancia / velocidad).toFixed(2));
}
console.log(time1());
