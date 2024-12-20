/*Simulador de carrito de compras donde se realizan las modificacion desde el archivo JS y tambien se agrega la informacion
dentro del localStorage al ocupar el evento comprar*/

const contenedorProductos = document.getElementById("contenedorCards");

//Array de elementos del carrito
let productos = [
  {
    id: 1,
    nombre: "Cafetera-Moulinex",
    precio: 1500,
    categoria: "Cocina",
    marca: "LG",
    img: "Cafetera-Moulinex",
  },
  {
    id: 2,
    nombre: "MacBook-Pro-2019",
    precio: 25000,
    categoria: "Hogar",
    marca: "Apple",
    img: "MacBook-Pro-2019",
  },
  {
    id: 3,
    nombre: "Samsung-Galaxy-S10",
    precio: 20000,
    categoria: "Telefonia",
    marca: "Samsung",
    img: "Samsung-Galaxy-S10",
  },
  {
    id: 4,
    nombre: "TV-Samsung-Smart",
    precio: 30000,
    categoria: "Hogar",
    marca: "Samsung",
    img: "TV-Samsung-Smart",
  },
  {
    id: 5,
    nombre: "Laptop-Lenovo-S3040",
    precio: 20000,
    categoria: "Tecnologia",
    marca: "Lenovo",
    img: "Laptop-Lenovo-S3040",
  },
];

//se inicializa y se agrega la informacion del carrito dentro del localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let contenido = document.createElement("div");
  contenido.className = "card";
  contenido.innerHTML = `
        <img src="./assets/${product.img}.jpg">
        <h3>${product.nombre}</h3>
        <p class="precio">$${product.precio}</p>
        `;

  //se crea el boton comprar y el evento click para agregar la informacion al localStorage
  let comprar = document.createElement("button");
  comprar.className = "comprar";
  comprar.innerText = "comprar";
  comprar.addEventListener("click", () => {
    carrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(`${product.nombre} agregado al carrito`);
  });

  contenido.append(comprar);
  contenedorProductos.append(contenido);
});
