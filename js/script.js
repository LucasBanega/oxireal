/* function saludar() {

    console.log("Hola!");
}

saludar();

function solicitarNombre() {
    let nombreIngresado = prompt("Ingrese su nombre");
    alert("El nombre ingresado es " + nombreIngresado);
}

for (let index = 0; index < 2; index++) {
    solicitarNombre();
}

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let cliente = prompt("¿Es usted cliente de Oxi Real?")
let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado" + " " + nombreUsuario);
}


for (let index = 1; index <= 3; index++) {
    let ingresarNombre = prompt("Ingrese su Nombre");
    alert(" Cliente N° " + index + " Nombre: " + ingresarNombre);

}

let cookies = prompt("¿Acepta Cookies?");
while (cookies == "no") {
    ;
    alert(cookies + " " + "Aceptaste cookies");
    cookies = prompt("¿Acepta Cookies?")
}

const personaje = {
    nombre: "Leonard",
    edad: 41,
    ci: 173
}

console.log(personaje.nombre);
console.log(personaje["edad"]);


function Persona(first, last, age, iq, nicknames) {
    this.nombre = {
        'first': first,
        'last': last
    };
    this.edad: age,
        this.ci: iq,
            this.apodos: nicknames;
} 


class Cliente {

    constructor(nombre, apellido, edad, tipodesoldadura, escliente) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.tipodesoldadura = tipodesoldadura;
        this.escliente = escliente
    }

    soldadura() {
        if (this.tipodesoldadura == "ATAL") {
            console.log("Soldas con MIG");
        } else {
            console.log("Soldas con TIG");
        }
    
    cliente() {
        if (this.escliente == "si") {
            console.log ("Gracias por confiar en Oxi Real");
        }else{
            console.log("Bienvenido a Oxi Real")
        }
    }    

    }

}

const Cliente1 =new Cliente("Lucas", "Banega", "23", "ATAL", "Si");

Cliente1.soldadura();

Cliente1.tipodesoldadura = prompt("¿Suelda con ATAL o con ARGON?");

*/

class Prospecto {

    constructor(nombre, edad, cliente, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.cliente = cliente;
        this.tipo = tipo;
    }

    soldador() {
        if (this.tipo == "Atal") {
            console.log("Soldas con MIG");
        }else{
            console.log("Soldas con TIG");
        }
    }
}

const prospecto1 =new Prospecto("Lucas", "23", "Sí", "MIG");

prospecto1.tipo = prompt("¿Suelda con Atal o con Argon?");

prospecto1.soldador();

prospecto1.nombre = prompt("Ingrese su nombre");
prospecto1.edad = parseInt(prompt("Ingrese su edad"));
prospecto1.cliente = prompt("¿Es cliente de Oxi Real?");

