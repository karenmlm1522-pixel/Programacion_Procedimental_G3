let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let valor_total = document.getElementById("valor_total").value;

function ValidarFormulario () {
if ( ventas === "" || fecha === "" || ingresos === "" || egresos === "" || valor_total === "") {
    console.log("Los campos estan vacios, por favor completelos");
}

else {
  if(ytpeof ventas === "number") {
    console.log( "Solo puede contener números")
  }
   if(ytpeof fecha === "number") {
    console.log( "Solo puede contener números")
  }

   if(ytpeof ingresos === "number") {
    console.log( "Solo puede contener números")
  }
  
   if(ytpeof egresos === "number") {
    console.log( "Solo puede contener números")
  }

   if(ytpeof valor_total === "number") {
    console.log( "Solo puede contener números")
  }

}


}
