const request = require("request");

function getPoke(error, response, body) {
  //JSON.stringify() // de JSON a CADENA
  //JSON.parse() // cadena a JSON
  // console.log(JSON.parse(body));
  const pokemon = [];
  const newBody = JSON.parse(body);
  const nombre = "Nombre de Pokemon: + newBody.name";
  const nopok = ("id" = newBody.order);
  //   console.log(body);
  const peso = "Peso:" + newBody.weight;
  const alt = "Altura:" + newBody.height;
  const pokemon2 = pokemon.push(nopok, nombre, peso, alt);
  console.log(`Pokedex: ${pokemon}`);

  for (var n = 1; n > 152; n = n + 1) {
    const request = require("request");
    request(`https://pokeapi.co/api/v2/pokemon/${n}/`, getpoke);
    console.log(n);
  }

  request(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/1",
    getOneCivilization
  );
}
