function validarFormulario() {
let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;

  if (
    ventas == "" || fecha == "" || ingresos == "" || egresos == "" || Concepto == ""
  ) {
    console.log("Los campos están vacíos");
         Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error"

});
return;
  } else {
    if (!/[0-9]/.test(ventas)) {
      console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error"
});
return;
    }

    if (!/[0-9]/.test(ingresos)) {
       console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error"
});
return;
    }

    if (!/[0-9]/.test(egresos) ) {
       console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
  icon: "error"
});
return;
    }

    if (!/[0-9]/.test(valor_total)) {
       console.log("esta categoria debe tener números")
      Swal.fire({
  title: "esta categoria debe tener números",
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