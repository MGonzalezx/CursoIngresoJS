function mostrar()
{
   var precio;
   var porcentajeDeDescuento;
   var precioConDescuento;
   var precioConDescuentoMasIva;
   var iva;
   var cantidadDescontada;
   
   precio = prompt("Ingrese precio");
   porcentajeDeDescuento = prompt("Ingrese Porcentaje a descontar");

    cantidadDescontada = (porcentajeDeDescuento*precio)/100 ;
    precioConDescuento = precio-((porcentajeDeDescuento*precio)/100) ;
    iva = (21*precioConDescuento)/100 ;
    precioConDescuentoMasIva = precioConDescuento + iva ;


  

   alert("Se descuenta: "+ cantidadDescontada + ". Precio con descuento "+ precioConDescuento+ ". El iva del precio con descuento: " + iva);

   document.getElementById('elPrecioFinal').value = precioConDescuentoMasIva ;

}





