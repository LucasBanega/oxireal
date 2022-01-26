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

const HTMLUsuario = document.getElementById("nombreUsuario");
const divPadre = document.getElementById("contenedor");
divPadre.innerHTML = HTMLUsuario;
console.log(HTMLUsuario);

let simulador = document.getElementById("simulador");
console.log(simulador.innerHTML);

let concepto = document.getElementById("concepto");
console.log(concepto.innerHTML);  
