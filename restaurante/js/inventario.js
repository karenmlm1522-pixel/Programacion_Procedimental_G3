function validarFormulario() {
let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;
let marca_producto = document.getElementById("marca_producto").value;
  if (
    codigo_producto == "" || nombre_producto == "" || cantidad_producto == "" || marca_producto == ""
  ) { 
      console.log("Los campos están vacíos");
  } else {
    if (!/[0-9]/ .test(codigo_producto)) {
      console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error"
});
return;
    }

    if (!/[a-zA-Z]/ .test(nombre_producto)) {
      console.log("esta categoria debe tener letras")
      Swal.fire({
  title: "esta categoria debe tener letras",
  icon: "error"
});
return;
    }

    if (!/[0-9]/.test(cantidad_producto)) {
      console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error"
});
return;
    }

    if (!/[0-9]/.test(marca_producto)) {
      console.log("esta categoria debe tener letras")
      Swal.fire({
  title: "esta categoria debe tener letras",
  icon: "error"
});
return;
    }
     Swal.fire({
  title: "Guardado con exito",
  icon: "success"
  
});
  }
}

document.getElementById("Guardar").onclick = validarFormulario;