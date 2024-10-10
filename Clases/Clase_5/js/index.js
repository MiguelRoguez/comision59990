console.log("Veremos arrays, animo campeon... tu puedes");

//es una estructura de datos que se utiliza para agregar una cantidad de valores

/**
 * un array es una lista o estructa de datos que se utiliza para almacenar una coleccion de valores.
 * los valores array pueden ser de cualquier tipo, numeros, cadena de texto, abjetos y podemos tener un array
 * dentro de otro array, hasta funciones
 *
 * los arrays SIEMPRE INCIAN CON EL INDICE (POSICION 0)
 *
 * por consola podemos ver una palabrita llamada length => que nos dice la longitud del array.
 * () => funciones
 * {} => objetos
 * [] => arrays
 *
 *
 */

// let array = [ coleecion de datos ]; //si estan vacios los corchetes estamos en presencia de un array vacio

// let strigs = ["numero", "perro", "jaime", "tyrion"];
// let numeros = [1, 2, 3, 4, 5];
// let boolean = [true, false, true, false];
// let mixto = [1, "numero", false, 2];

// let pokemon = [
//   {
//     pokemon: "pikachu",
//     tipo: "electrico",
//   },
//   {
//     pokemon: "evee",
//     tipo: "normal",
//   },
//   {
//     pokemon: "lugia",
//     tipo: "legendiario",
//   },
// ];

// // console.log(strigs);
// // console.log(strigs[2]);
// // console.log(numeros);
// // console.log(boolean);
// // console.log(mixto);
// // console.log(pokemon);
// // console.log(pokemon[1]);

// //recorrer un array

// for (let i = 0; i < pokemon.length; i++) {
//   //   console.log(pokemon[i]); esto me devuelve el objeto entero
//   console.log(pokemon[i].pokemon); //esto me devuelve solo el nombre del pokemon
// }

//legnrh no es un metodo, es una propiedad. Sirve para darnos o devolvernos la cantidad de elementos que posee un array

/**
 * Los metodos en array son funciones incorporadas en js que nos van a permitir realizar algunas operaciones.
 * de manera sencillas y rapidas
 */

let strigs = ["numero", "perro", "jaime", "tyrion"];

/*
metodo push => nos permite agregar uno o mas elemento al final del array
*/

strigs.push("Juan Pablo Andueza", "pepe");

console.log(strigs);

/*
metodo pop => me va a eliminar un elemento o varios del array siempre y cuando este al final del array
*/

strigs.pop();
console.log(strigs);
