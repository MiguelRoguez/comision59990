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

// Una vez que el programa 1 termina, ejecuta el programa 2
setTimeout(() => {
  // Código del programa 2
  console.log("Ahora se ejecuta el segundo programa");
}, 0);
