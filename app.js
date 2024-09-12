let nombre = "Michi";

console.log(
  `hola mundo me llamo ${nombre}, este es el primer mensaje que muestro desde node.js`
);

let edad = 45;

 if (edad >= 18) {
   console.log("Eres mayor de edad");
 } else {
   console.log("Eres menor de edad");
 }

//const tonyElMejor = (edad) => {
  //console.log(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");
//};

tonyElMejor(edad);

function sumar(a, b) {
  return a + b;
}
console.log(sumar(54, 7));
