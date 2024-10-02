console.log("Ejercicio 1");

let valorHora = parseInt(
  prompt("Ingresa el valor monetario de una hora de trabajo:")
);
let horaTrabajo = parseInt(prompt("Ingresa las horas de trabajo:"));

let salarioDia;
salarioDia = valorHora * horaTrabajo;
console.log("El salario diario es de " + salarioDia);

let salarioSemanal;
salarioSemanal = salarioDia * 5 + salarioDia / 2;
console.log("El salario semanal es de " + salarioSemanal);
