function saludar() {

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

/*/const personaje = {
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
/*/