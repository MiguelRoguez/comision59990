console.log("Se feliz aqui veremos las funciones");

//sentencia switch

/*
switch(expresion){

case valor1:
    //codigo de ejecucion;
    break;
case valor2:
    //codigo de ejecucion;
    break;
case valor3:
    //codigo de ejecucion;
    break; 
    
    default;
    //codigo ejecucion en caso de que no se cumpla ninguna condicion
}

*/

//Calculadora con if y else

// const NUM1 = parseFloat(prompt("Ingresa un numero:"));
// const OPERACION = prompt("ingrese la operacion que quiere hacer (+ - * /)");
// const NUM2 = parseFloat(prompt("ingresa el otro numero"));

// // if (OPERACION === +){
// //     NUM1 + NUM2
// // }

// switch (OPERACION) {
//   case "+":
//     resultado = NUM1 + NUM2;
//     break;
//   case "-":
//     resultado = NUM1 - NUM2;
//     break;
//   case "*":
//     resultado = NUM1 * NUM2;
//     break;
//   case "/":
//     resultado = NUM1 / NUM2;
//     break;
//   default:
//     alert("no estas ingresando una operacion valida");
//     resultado = "no es valido capo";
// }

// alert("El resultado es : " + resultado);

//funciones

//bloque de codigo reutilizable que va a ejecutar una funcion especifica.

//las funciones se utilizan para agrupar conjunto de instrucciones se van a ejecutar cuando se llamen

//las funciones nos sirven para dividir tareas en bloques de codigo mas pequeños

/*
-reutilizar codigo
-modularizar y organizarlo
-facilitar el mantenimiento y actualizaciones

-- estructura

function nombreFuncion(parametros){

 // escribir el codigo a ejecutar

 nombreFuncion();

las funciones suelen  ser verbos de accioes
es que tambien se escriben en camelCase


 }


*/

// function saludar() {
//   console.log("Buenas noches pibes todos sufran con esto");
//   console.log("Buenas noches pibes todos sufran con esto");
//   console.log("Buenas noches pibes todos sufran con esto");
//   console.log("Buenas noches pibes todos sufran con esto");
//   console.log("Buenas noches pibes todos sufran con esto");
// }

// saludar();
// saludar();

// function sumar() {
//   let num1 = parseInt(prompt("Ingresa un numero"));
//   let num2 = parseInt(prompt("Ingresa otro numero"));

//   let suma = num1 + num2;

//   console.log("la suma es: " + suma);
// }

// sumar();
// sumar();

// let nombreIngresado = prompt("Ingresa nombre");
// console.log("el nombre ingresado es " + nombreIngresado);

// let nombreIngresado2 = prompt("Ingresa nombre");
// console.log("el nombre ingresado es " + nombreIngresado2);

// function ingresaNombre(nombre) {
//   console.log("El nombre ingresado es", nombre);
// }

// ingresaNombre("pedro");
// ingresaNombre("Maxi");

// function saludar() {
//   let nombreIngresado = prompt("Ingresa un nombre");
//   console.log("hola " + nombreIngresado);
// }

// saludar();

// function datosPersona(nombre, apellido, edad) { //esto son parametros
//   console.log(
//     "esta persona se llama " +
//       nombre +
//       " su apellido es " +
//       apellido +
//       " su edad es " +
//       edad
//   );
// }

//cuando llamamos a una funcion los datos que se usan se llaman argumentos
// datosPersona("Miguel", "Rodriguez", 34); //esto se llama argumentos
// datosPersona("Carlos", "Rodriguez", 32);

// function calcular(montoInicial) {
//   let tasaIntereses = 0.08;

//   function calcularIntereses() {
//     return montoInicial * tasaIntereses;
//   }

//   let intereses = calcularIntereses();
//   let total = montoInicial + intereses;

//   return total;
// }

// console.log(calcular(1000));

//funciones anonimas y funciones flecha

/*
funcion anonima => no poseen un nombre especifico, se define en el momento, se puede asignar a una variable
las funciones anonimas se utilizan en callbacks de funciones de orden superior
en la creacion de modulos
cuando sabemos que la funcion no la vamos a volver a utilizar

let suma = function (a, b) {
  return a + b;
};

console.log(suma(5, 3));

*/

/*
function de tipo flecha o function flecha

sintaxis son mucho mas consisas (se utilizan mas que nada en funciones cortas)
no poseen argumentos

no posee return lo tiene implicito
y cuando la funcion se expresa en una sola linea no es necesario para ponerle las {}, pero si se expresa en mas de una linea ocupamos las 
llaves

funciones normales vs funciones flecha

funciones flecha => sintaxist limpia y concisa,cuando necesitamos mantener el contexto this (objetos)
y cuando trabajamos con metodos array

funciones normales => cuando hablamos de un contexto propio de this
cuando necesitamos acceder a argumentos.
cuando creamos un objeto
cuando son funciones complejas

*/

// let suma = (a, b) => a + b;
// console.log(suma(3, 4));
