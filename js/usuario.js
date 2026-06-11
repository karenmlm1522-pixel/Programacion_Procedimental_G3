console.log("hola mundo");
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let tipo_documento = document.getElementById("tipo_documento").value;
let numero_documento = document.getElementById("numero_documento").value;
let telefono = document.getElementById("telefono").value;
let email = document.getElementById("email").value;
let Cargo = document.getElementById("Cargo").value;
let genero = document.getElementById("genero").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
let contraseña = document.getElementById("contraseña").value;

function ValidarFormulario () {
 if ( nombre === "" || apellido === "" || tipo_documento === "" || numero_documento === "" || telefono === "" || email === "" || contraseña === "" || genero === "" || cargo === "" || fecha_nacimiento === "") {
    console.log("Los campos estan vacios, por favor completelos");
 }
else {
    if (nombre != /[a-zA-Z]/ || apellido != /[a-zA-Z]/) {
        console.log ("Los datos no son validos")
    }

    if (numero_documento.length < 10) {
        console.log ("Los datos no son validos")
    }    

    if (telefono.length < 10) {
        console.log ("Los datos non validos")
    }

    if (email != /[@]/) {
        console.log ("Los datos no son validos")
    }

    if (contraseña.length > 6 && contraseña.includes ("Z")) {
        console.log ("Los datos no son validos")
    }
}
}