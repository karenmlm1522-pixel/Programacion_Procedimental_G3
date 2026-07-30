function validarFormulario() {
  let nom_usuario = document.getElementById("nom_usuario").value;
  let producto = document.getElementById("producto").value;
  let cantidad = document.getElementById("cantidad").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let metodo_pago = document.getElementById("metodo_pago").value;

  if (nom_usuario == "" || producto == "" || cantidad == "" || direccion == "" || telefono == "" || metodo_pago == "") {
    console.log("Los campos están vacíos");
    Swal.fire({
      title: "Por favor completa la información del pedido",
      icon: "error"
    });
    return;
  }
else{
      if (!/^[a-zA-]+$/.test(nom_usuario)) {
    Swal.fire({
      title: "El nombre debe contener únicamente letras",
      icon: "error"
    });
    return;
  }

    if (!/^[a-zA-]+$/.test(producto)) {
    Swal.fire({
      title: "El nombre debe contener únicamente letras",
      icon: "error"
    });
    return;
  }

  if (!/[0-9]/.test(cantidad)) {
    console.log("esta categoria debe tener números");
    Swal.fire({
      title: "Esta categoría debe tener números",
      icon: "error"
    });
    return;
  }

    if (!/^[a-zA-]+$/.test(direccion)) {
    Swal.fire({
      title: "El nombre debe contener únicamente letras",
      icon: "error"
    });
    return;
  }

  if (!/[0-9]/.test(telefono)) {
    console.log("esta categoria debe tener números");
    Swal.fire({
      title: "Esta categoría debe tener números",
      icon: "error"
    });
    return;
  }

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Pedido guardado con éxito",
    showConfirmButton: false,
    timer: 1500
  });
}
}
document.getElementById("Guardar").onclick = validarFormulario;