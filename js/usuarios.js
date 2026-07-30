function  validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let tipo_documento = document.getElementById("tipo_documento").value;
  let num_documento = document.getElementById("num_documento").value;
  let telefono = document.getElementById("telefono").value;
  let correo = document.getElementById("correo").value;
  let cargo = document.getElementById("cargo").value;
  let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  let contraseña = document.getElementById("contraseña").value;

  if (nombre == "" || apellido == "" || tipo_documento == "" || num_documento == "" || telefono == "" || correo == "" || cargo == "" || fecha_nacimiento == "" || contraseña == "") {
    console.log("Los campos están vacíos");
    Swal.fire({
      title: "Por favor llena todos los campos",
      icon: "error"
    });
    return;
  }
  else{
  
  if (!/^[a-zA-]+$/.test(nombre)) {
    Swal.fire({
      title: "El nombre debe contener únicamente letras",
      icon: "error"
    });
    return;
  }

  if (!/^[a-zA-Z]+$/.test(apellido)) {
    Swal.fire({
      title: "El apellido debe contener únicamente letras",
      icon: "error"
    });
    return;
  }

  if (!/[0-9]/.test(num_documento)) {
    Swal.fire({
      title: "Esta categoría debe tener números",
      icon: "error"
    });
    return;
  }

  if (!/[0-9]/.test(telefono)) {
    Swal.fire({
      title: "Esta categoría debe tener números",
      icon: "error"
    });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    Swal.fire({
      title: "Ingresa un correo electrónico válido",
      icon: "error"
    });
    return;
  }

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Usuario guardado con éxito",
    showConfirmButton: false,
    timer: 1500
  });
}
}
document.getElementById("Guardar").onclick = validarFormulario;