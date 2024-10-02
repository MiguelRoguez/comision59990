// Calculadora de Cuota Mensual de Compra de Productos

let montoTotal = 20000;
let numeroCuotas = 10;
let tasaInteres = 8;

let cuotaMensual = calcularCuotas(montoTotal, numeroCuotas, tasaInteres);

function calcularCuotas(montoTotal, numeroCuotas, tasaInteres) {
  // Convertir la tasa de interés a decimal
  let tasaInteresDecimal = tasaInteres / 100;

  // Calcular el valor de cada cuota utilizando la fórmula de amortización
  let cuota =
    (montoTotal *
      tasaInteresDecimal *
      Math.pow(1 + tasaInteresDecimal, numeroCuotas)) /
    (Math.pow(1 + tasaInteresDecimal, numeroCuotas) - 1);

  return cuota;
}

console.log("La cuota mensual es:", cuotaMensual.toFixed(2));
