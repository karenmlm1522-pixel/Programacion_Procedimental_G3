let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;
let marca_producto = document.getElementById("marca_producto").value;

function ValidarFormulario () {
if ( ventas === "" || fecha === "" || ingresos === "" || egresos === "" || valor_total === "") {
    console.log("Los campos estan vacios, por favor completelos");
}

else {
  if(ytpeof codigo_producto === "number") {
    console.log( "Solo puede contener números")
  }
   if(nombre_producto != /[a-zA-Z]/) {
    console.log( "Solo puede contener letras")
  }

   if(ytpeof cantidad_producto === "number") {
    console.log( "Solo puede contener números")
  }
  
   if(nombre_producto != /[a-zA-Z]/) {
    console.log( "Solo puede contener letras")
  }

}
}