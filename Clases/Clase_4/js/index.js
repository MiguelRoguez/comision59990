console.log("Tu puedes campeon, aqui veremos Objetos");

//Objetos

/*
 los Objetos son aquellas que cuentan con varias caracteristicas => una coleecion de propiedades
 donde cada propiedad se compone de:
 un valor y una clave
 en JavaScript nosotros lo utilizamos para almacenar datos y funciones


 para declarar un objeto se escribe de la siguiente manera

 let nombre = {
 //coleccion de propiedades
    clave:valor,
    clave1:valor1,

 }
*/

// let persona = {
//   nombre: "Pedro",
//   edad: "31",
//   estudios: "Programacion",
// };

// console.log(persona);
// console.log(persona.estudios);

// let producto = {
//   id: 1,
//   nombre: "Jarron Manuela",
//   material: "Marmol",
//   precio: 15000,
//   color: "Blanco con camel",
// };

// console.log(producto["nombre"]);
// console.log(producto.color);

// producto.material = "cuarzo";

// console.log(producto.material);

// console.log(producto);

// Objetos constructores

/*
nos permiten crear objetos a partir de plantillas, que se definen a partir de una funcion
Instanciar y crear multiples objetos

1. tener que definir una funcion, que inicia las propiedades del objeto
2. tenemos que pasarle informacion a traves de una palabra clave llamada .new

para reconocer un objeto constructor escribimis su primer letra en mayusculas

this es una palabra que refiere al contexto de ejecucion y el valor puede cambiar dependiendo de como invoquemos a la funcion

instanciar refiere al proceso de crear un objeto a partir de una clase

backtick se genera con alt + 96

concatenar con tempalte literals
return `${this.marca} ${this.modelo}, año ${this.anio}`;

*/

// function Auto(marca, modelo, anio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.anio = anio;
//   this.info = function () {
//     return `${this.marca} ${this.modelo}, año ${this.anio}`;
//   };
// }

// let auto1 = new Auto("toyota", "corolla", 2021);
// let auto2 = new Auto("honda", "civic", 2020);
// console.log(auto1.info());
// console.log(auto2.info());

//clases son una manera mas moderna de hacer objetos.

/*
es una manera mas facil en cuanto a la sintaxis y mas clara

las clases funcionan de la siguiente manera:

dentro de la clase se crea un constructor que nos sirve para inicializar las propiedades del objeto

*/

// class Auto {
//   constructor(marca, modelo, anio) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.anio = anio;
//   }
//   info() {
//     return `${this.marca} ${this.modelo}, año ${this.anio}`;
//   }
// }

// let auto1 = new Auto("honda", "civic", 2021);

// console.log(auto1.info());
// console.log(auto1);

class Persona {
  constructor(nombre, edad, calle, ciudad, codigoPostal, habilidades) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = {
      calle: calle,
      ciudad: ciudad,
      codigoPostal: codigoPostal,
    };
    this.habilidades = habilidades;
  }
  mostrarInfo() {
    console.log(`nombre ${this.nombre}`);
  }
}

let Juan = new Persona(
  "Miguel",
  34,
  "Guelaguetza",
  "Huatulco",
  7600,
  "Programacion"
);

console.log(Juan.direccion["calle"]);

