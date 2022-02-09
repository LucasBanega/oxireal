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

$(document).ready(function(){

    console.log("Ya podemos trabajar con el DOM");

})


$(function(){
    console.log("Ya podemos trabajar con el DOM");
})

$('.titulo').css('color', 'black');
*/


let $material = document.getElementById('list-material')
let $calor = document.getElementById('list-calor')
let $espesor = document.getElementById('list-espesor')
let $productividad = document.getElementById('list-productividad')

let materiales = ['Metal', 'No metal']
let calores = ['Zona de calor tolerada', 'Zona de calor no tolerada']
let espesores = ['Menos de 10 mm (3/8 pulg.)', 'De 10 mm (3/8 pulg.) a 50 mm (2 pulg.)', 'De 50 mm (2 pulg.) a 75 mm (3 pulg.)', 'Más de 75 mm (3 pulg.)']
let calidad = ['Necesito un corte perfectamente recto y una precisión muy alta, aun si eso significa cortar extremadamente lento', 'Valoro la productividad y la calidad. Estoy dispuesto a aceptar un ángulo de bisel de hasta 3º si puedo maximizar la velocidad de corte', 'Tener un ángulo de bisel de ≥ 3° es perfectamente aceptable si puedo cortar muy rápidamente']

function mostrarOpciones (soldadura, corte) {
    let elementos = '<option selected disables>--Seleccione--</option>'

    for(let i = 0; i <soldadura.length; i++){
        elementos += '<option value="' + soldadura[i] + '">' + soldadura[i] + '</option>'
    }

    corte.innerHTML = elementos
}

mostrarOpciones(materiales, $material)


$material.addEventListener('change', function() {
    let valor = $material.value

    
})

listForm.addEventListener('input', () => {
    if ($material.value == 'Metal') {
        $calor.removeAttribute('disabled');
    } else {
        $calor.setAttribute('disabled', 'disabled');   
    }

    if ($calor.value == 'Tolerada') {
        $espesor.removeAttribute('disabled');
    } else {
        $espesor.setAttribute('disabled', 'disabled');   
    }

    if ($espesor.value == 'Menos de 10 mm (3/8 pulg.)') {
        $productividad.removeAttribute('disabled');
    } else {
        $productividad.setAttribute('disabled', 'disabled');   
    }



});






