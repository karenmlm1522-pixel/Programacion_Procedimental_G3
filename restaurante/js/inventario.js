function validarFormulario() {
let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;
let marca_producto = document.getElementById("marca_producto").value;
  if (
    codigo_producto === "" || nombre_producto === "" || cantidad_producto === "" || marca_producto === ""
  ) { 
      console.log("Los campos están vacíos");
  } else {
    if (codigo_producto != /[0-9]/) {
      console.log("Los datos no son validos");
    }

    if (nombre_producto != /[a-zA-Z]/) {
      console.log("Los datos no son validos");
    }

    if (cantidad_producto != /[0-9]/) {
      console.log("Los datos no son validos");
    }

    if (marca_producto != /[a-zA-Z]/) {
      console.log("Los datos no son validos");
    }


  }
}

let btnGuardar = document.getElementById("btnGuardar").value;
document.getElementById("btnGuardar").onclick = validarFormulario;