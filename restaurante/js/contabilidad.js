function validarFormulario() {
let Ventas = document.getElementById("Ventas").value;
let Fecha = document.getElementById("Fecha").value;
let Ingresos = document.getElementById("Ingresos").value;
let Egresos = document.getElementById("Egresos").value;
let Concepto = document.getElementById("Concepto").value;

  if (
    ventas === "" || fecha === "" || ingresos === "" || egresos === "" || Concepto === ""
  ) {
    console.log("Los campos están vacíos");
  } else {
    if (ventas != /[0-9]/) {
      console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error",
  showConfirmButton: false,
  timer: 1500
});
return;
    }

    if (ingresos != /[0-9]/) {
       console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error",
  showConfirmButton: false,
  timer: 1500
});
return;
    }

    if (egresos != /[0-9]/) {
       console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error",
  showConfirmButton: false,
  timer: 1500
});
return;
    }

    if (valor_total != /[0-9]/) {
       console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error",
  showConfirmButton: false,
  timer: 1500
});
return;
    }
  }
}

let Guardar = document.getElementById("Guardar").value;
document.getElementById("Guardar").onclick = validarFormulario;