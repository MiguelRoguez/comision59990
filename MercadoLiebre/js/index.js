/*Programa que permite validar los pagos de un carrito de compras dentro de una pagina, se eligio 
calcular el costo total de productos de acuerdo a sus cantidades y con este total verificar la cantidad cuotas 
de acuerdo a un monto total dando un desgloce de los mismos
*/

//funciones iniciales para calculos del programa

function crearProducto(nombre, precio, cantidad) {
  //para una validacion al generar productos
  if (typeof precio !== "number" || typeof cantidad !== "number") {
    throw new Error("Precio y cantidad deben ser números");
  }
  if (cantidad <= 0) {
    throw new Error("La cantidad debe ser mayor que cero");
  }

  return {
    nombre,
    precio,
    cantidad,
    subtotal: precio * cantidad,
  };
}

function dividirValores(valores, divisor) {
  // Función para dividir las cuotas un array de valores
  return valores.map((valor) => valor / divisor);
}

function calcularCostoTotal(productos) {
  // Función para calcular el costo total de mi array de productos
  return productos.reduce((total, producto) => total + producto.subtotal, 0);
}

function calcularCuotas(montoTotal, cantidadCuotas) {
  // Función para calcular el valor de cada cuota y generar un array de cuotas
  const valorCuota = montoTotal / cantidadCuotas;
  return Array.from({ length: cantidadCuotas }, () => valorCuota);
}

// Aqui inicia mi programa y el array con los datos que el usuario me proporciona el usuario
const productos = [];

let seguirComprando = true;

while (seguirComprando) {
  const nombreProducto = prompt(
    "Ingrese el nombre del producto (o escribe 'fin' para terminar):"
  );
  //con la palabra fin concluyo el proceso
  if (nombreProducto.toLowerCase() === "fin") {
    seguirComprando = false;
  } else {
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    if (!isNaN(precio) && !isNaN(cantidad)) {
      const producto = crearProducto(nombreProducto, precio, cantidad);
      productos.push(producto);
      console.log(
        `Subtotal para ${producto.nombre}: $${producto.subtotal.toFixed(2)}`
      );
    } else {
      console.error("Precio o cantidad inválidos. Ingrese solo números");
    }
  }
}

//calcular el costo total utilizando reduce
const costoTotal = productos.reduce(
  (total, producto) => total + producto.subtotal,
  0
);

// Este me mostrara el costo total en consola
console.log("Costo total: $", costoTotal.toFixed(2));

// Una vez que conozco el costo total lo ocupo para determinar las cuotas a diferir
const cantidadCuotas = parseInt(
  prompt("Ingrese la cantidad de cuotas a diferir:")
);
if (isNaN(cantidadCuotas) || cantidadCuotas <= 0) {
  console.error("Por favor, ingresa una cantidad de cuotas válida.");
} else {
  //Calcular las cuotas utilizando map y la funcion dividirValores
  const cuotas = dividirValores(
    Array(cantidadCuotas).fill(costoTotal),
    cantidadCuotas
  );

  // Mostrar el valor de cada cuota
  console.log(
    `Usted eligio diferir en ${cantidadCuotas} cuotas y el valor de cada cuota: es $`,
    cuotas[0].toFixed(2)
  );

  // Mostrar un desglose de las cuotas
  console.log("Detalle de las cuotas:");
  cuotas.forEach((cuota, indice) => {
    console.log(`Cuota ${indice + 1}: $${cuota.toFixed(2)}`);
  });
}

// Mostrar detalles de los productos del array
console.log("Detalle de la compra:");
productos.forEach((producto) => {
  console.log(
    `${producto.nombre} - Cantidad: ${
      producto.cantidad
    } - Subtotal: $${producto.subtotal.toFixed(2)}`
  );
});
