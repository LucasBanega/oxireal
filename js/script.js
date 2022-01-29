/* class Prospecto {

    constructor(nombre, edad, cliente, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.cliente = cliente;
        this.tipo = tipo;
    }

    soldador() {
        if (this.tipo == "Atal") {
            console.log("Soldas con MIG");
        } else {
            console.log("Soldas con TIG");
        }
    }
}

const prospecto1 = new Prospecto("Lucas", "23", "Sí", "MIG");

prospecto1.tipo = prompt("¿Suelda con Atal o con Argon?");

prospecto1.soldador();

prospecto1.nombre = prompt("Ingrese su nombre");
prospecto1.edad = parseInt(prompt("Ingrese su edad"));
prospecto1.cliente = prompt("¿Es cliente de Oxi Real?");

const productos = [{ id: 1, producto: "Máquina" },
{ id: 2, producto: "Torchas" },
{ id: 3, producto: "Consumibles" },
{ id: 4, producto: "Insumos" }];
productos.push({ id: 5, producto: "Alambre" });

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}


localStorage.setItem('usuario', 'Lucas');
localStorage.setItem('Edad', '23');

sessionStorage.setItem('Cuotas', [3, 6, 9, 12]);
sessionStorage.setItem('esDarkMode', true);


let usuario = localStorage.getItem('usuario');
console.log(usuario);

let cantCuotas = sessionStorage.getItem('Cuotas').split(",");
let modo = (sessionStorage.getItem('esDarkMode') == 'true');


for (let i = 0; i < sessionStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log = ("Clave: " + clave);
    console.log = ("Valor: " + sessionStorage.getItem(clave));
}

*/

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}

const imagenes = document.querySelectorAll(".imagenes img");
const imagenMostrada = document.querySelectorAll(".imagen-mostrada img");
const consumibles = document.querySelectorAll(".consumibles span");
const espesores = document.querySelectorAll(".espesores .potencia");

consumibles.forEach(consumibles => {
    consumibles.addEventListener("click", () => {
        const id = consumibles.getAttribute("id")
        imagenMostrada.setAttribute("src", '../images/${id}.jpg')
    })
})

const eliminarActive = () => {
    espesores.forEach(potencia => {
        potencia.classList.remove("active")
    })
}

espesores.forEach(potencia => {
    potencia.addEventListener("click", () => {
        eliminarActive();
        potencia.classList.add("active");
    })
})