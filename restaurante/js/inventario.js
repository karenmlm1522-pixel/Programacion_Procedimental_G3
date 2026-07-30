function validarFormulario() {
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let cantidad = document.getElementById("cantidad").value;
  let marca = document.getElementById("marca").value;

  if (codigo == "" || nombre == "" || cantidad == "" || marca == "") {
    console.log("Los campos están vacíos");
    Swal.fire({
      title: "Por favor llena todos los campos",
      icon: "error"
    });
    return;
  }
else{
    if (!/[0-9]/.test(codigo)) {
    console.log("esta categoria debe tener números");
    Swal.fire({
      title: "Esta categoría debe contener números",
      icon: "error"
    });
    return;
  }

      if (!/^[a-zA-]+$/.test(nombre)) {
    Swal.fire({
      title: "El nombre debe contener únicamente letras",
      icon: "error"
    });
    return;
  } 

  if (!/[0-9]/.test(cantidad)) {
    console.log("esta categoria debe tener números");
    Swal.fire({
      title: "Esta categoría debe contener números",
      icon: "error"
    });
    return;
  }

    if (!/^[a-zA-]+$/.test(marca)) {
    Swal.fire({
      title: "La marca debe contener únicamente letras",
      icon: "error"
    });
    return;
  }

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Producto guardado con éxito",
    showConfirmButton: false,
    timer: 1500
  });
}
}
document.getElementById("Guardar").onclick = validarFormulario;