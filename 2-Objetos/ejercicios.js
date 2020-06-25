const myPenguin = {
  character: "Tacky",
  origin: "Tacky the penguin",
  author: "Helen Lester",
  notes: "A penguin who does things differently than other penguins.",
};

console.log(`Hola soy un pinguino y mi nombre es ${myPenguin.character}`);
myPenguin.author = "Mario";

myPenguin.puedeVolar = false;
console.log(myPenguin);

myPenguin.graznar = function () {
  //   console.log("kawkaw");
  return "kawkaw";
};

//   myPenguin.push("puedeVolar");
// }
// puedeVolar = "false";

// graznar = myPenguin.push = `kakaw kakaw`;

console.log(`Hola ${myPenguin.graznar()}`);
console.log(`Hola ${myPenguin.puedeVolar}`);
