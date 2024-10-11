// Programa para calcular el costo total de Productos y Cantidades que el usuario seleccione.

let costoTotal = 0;
let seguirComprando = true;

//Se agrega un false al ciclo while con un 'fin' cuando ya no requiera mas producto el usuario
while (seguirComprando) {
  const nombreProducto = prompt(
    "Ingrese el nombre del producto (o escribe 'fin' para terminar):"
  );
  //Se solicita al usuario agregar Producto y Cantidad
  if (nombreProducto.toLowerCase() === "fin") {
    seguirComprando = false;
  } else {
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

    //Inicia el calculo de los producos si el usuario no captura algo mas
    if (!isNaN(precio) && !isNaN(cantidad)) {
      const subtotal = precio * cantidad;
      costoTotal += subtotal;
      console.log(`Subtotal para ${nombreProducto}: $${subtotal.toFixed(2)}`);
    } else {
      //Se agrega un mensaje de error en consola en caso de algun dato invalido
      console.error("Precio o cantidad invalidos. Ingrese solo numeros");
    }
  }
}
//Se indica por medio de consola el el resultado de cada Captura y el Costo Total
console.log("Costo total: $", costoTotal.toFixed(2));

// Una vez que el programa 1 termina, ejecutamos el programa 2
setTimeout(() => {
  // Mensaje para indicar y verificar que inicia el programa 2
  console.log("¡Aqui inicia el segundo programa!");

  // Programa para obtener el monto total y la cantidad de cuotas que indica el usuario
  const montoTotal = parseFloat(prompt("Ingresa el monto total:"));
  const cantidadCuotas = parseInt(
    prompt("Ingrese la cantidad de cuotas a diferir:")
  );

  // Se validan que los datos ingresados sean corretos
  if (isNaN(montoTotal) || isNaN(cantidadCuotas) || cantidadCuotas <= 0) {
    console.error(
      "Por favor, ingresa un monto y una cantidad de cuotas validos."
    );
  } else {
    // Se ejecuta la formula para calcular el valor de cada cuota
    const valorCuota = montoTotal / cantidadCuotas;

    // Mostramos el resultado por medio de consola
    console.log("El valor de cada cuota es: $" + valorCuota.toFixed(2));

    // Por medio de un ciclo for se muestra un desglose de cada cuota en consola
    for (let i = 1; i <= cantidadCuotas; i++) {
      console.log(`Cuota ${i}: $${valorCuota.toFixed(2)}`);
    }
  }
}, 0);
