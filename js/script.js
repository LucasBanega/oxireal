let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let cliente = prompt("¿Es usted cliente de Oxi Real?")
let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
} 
else {
    alert("Nombre de usuario ingresado" +" "+ nombreUsuario);
}

/*/ function saludar () {

   console.log("Hola!");
}

saludar();

function solicitarNombre() {
    let nombreIngresado = prompt ("Ingrese su nombre");
    alert("El nombre ingresado es "+ nombreIngresado);
}

for (let index = 0; index < 30; index++) {
  solicitarNombre();
}

function sumar(numero1,numero2){
    let resultado = numero1+numero2;
    console.log(resultado);
}

sumar (82000,95000);
sumar (125,245);
/*/

for (let index = 1; index <= 3; index++) {
    let ingresarNombre = prompt("Ingrese su Nombre");
    alert(" Cliente N° " +index+" Nombre: "+ingresarNombre);
    
}

let cookies = prompt("¿Acepta Cookies?");
while(cookies == "no"){;
    alert(cookies+" "+"Aceptaste cookies");
    cookies = prompt("¿Acepta Cookies?")    
}
