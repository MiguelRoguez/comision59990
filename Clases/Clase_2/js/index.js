//if => sentencia que nos dice si una condicion se cumple.

/*

if(condicion){
 //la instruccion o lo que queremos que se devuelva

}

*/

/*
operadores de comparacion o relacionales

= asignacion

== operador de igualdad (solo vamos a comparar valores y no el tipo de dato)

=== operador de igualdad pero estricto (va a comparar valores y va a comparar el tipo de dato)

!= distinto

!== distinto estrictamente estricto

*/

/*
//asignamos
let a, b, c, d;

//inicializamos
a = 23;


if (a == "18") {
  console.log("es un 18");
}

if (a === 18) {
  console.log("me devolves 18");
} else {
  console.log("no va a funcionar campeon porque no es igual el tipo numerico");
}
*/

//¿cuantos años tengo?
// cuando lleva el numero un punto flotante se usa parseFloat

// let edad = parseInt(
//   prompt("por favor ingresa tu edad para ingresar al cheboli:")
// );

/*
mayor que o menor que

mayor       > (el numero es mayor al que se esta comparando) (no incluye el numero)
mayor que   >= (el numero es mayor o igual al que se esta comparando) (si incluye el numero)

menor       < (el numero es menor al que se esta comparando) (no incluye el numero)
menor que   <= (el numero es menor o igual al que se esta comparando) (se incluye el numero)
*/

// if (edad >= 18) {
//   console.log("el pibe puede entrar");
// } else {
//   console.log("el pibe no tiene 18");
// }

// else if => cuando queremos comparar o hacer multiples condiciones

// notas de evaluacion

// 90 => el examen es optimo
// 75 => el examen es correcto
// 60 => el examen es bajo
// -60 => el examen esta desaprobado

// let nota = parseInt(prompt("Ingresa nota del alumno:"));

// if (nota >= 90) {
//   //podemos ejecutar siempre mas codigo => puede haber otro if, puede ejecutarse una funcion
//   console.log("el pibe es crack saco optimo con " + nota);
// } else if (nota >= 75) {
//   console.log("el pibe esta bien tiene un correcto");
// } else if (nota >= 60) {
//   console.log("el pibe safo tiene una nota baja");
// } else {
//   console.log("ni chatgpt lo ayudo");
// }

/*
operador logico and &&

este operador va devolver verdadero (true) siempre y cuando las condiciones que se comparen sean verdaderos

    a       b       a && B
    true    true    true (se va a ejecutar)
    true    false   false(no se va a ejecutar)
    false   true    false(no se va a ejecutar)
    false   false   false(no se va a ejecutar)
*/

/*
let edad = 25;

let tieneLicencia = true;

//para que una persona pueda manejar debe de ser mayor de edad y tener registro

if (edad >= 18 && tieneLicencia === true) {
  console.log("el chico puede manejar");
} else {
  console.log("el chico no puede manejar");
}

// operador OR se expresa con || se va a jecutar el bloque de codigo si al menos una condicion es verdadera
//para las barritas es alt + 124
*/

/*

    a       b       a || B
    true    true    true (se va a ejecutar)
    true    false   true (se va a ejecutar)
    false   true    true (se va a ejecutar)
    false   false   false(no se va a ejecutar)

*/

/*
let nombre = "Pedro";
let apellido = "Rodriguez";
let anios = 17;

if (nombre === "Juan" || apellido === "Perez" || anios >= 18) {
  console.log("La persona cumple con los criterios para llenar la encuesta");
} else {
  console.log("La persona no cumple con los criterios");
}
*/

/*!
//operador not

    true => !true => false
    false => !false => true

*/

let campoNombre = "";

if (!campoNombre) {
  console.log("el campo nombre esta vacio por favor completa el campo");
} else {
  console.log("el campo completado");
}
