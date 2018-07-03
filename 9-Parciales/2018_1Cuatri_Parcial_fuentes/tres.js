function mostrar()
{
	//(precio-((porcentajeDeDescuento*precio)/100)));
	var precio;
	var porcentajeDeDescuento;
	var precioFinalConDescuento;
	precio=prompt("Ingrese precio");
	porcentajeDeDescuento=prompt("Ingrese porcentaje a descontar");
	
	precioFinalConDescuento= precio-((porcentajeDeDescuento*precio)/100);
    /*Si me piden mostrar por ID, y no por alert. Primero darle un valor o acción (en este caso le di la cuenta del descuento) a la variable que vas a usar
     con el document.getElementById. Luego tengo que igualar el document.getElementById a la variable ya que lo que esta a la derecha toma el valor de el de
     la izquierda. Osea, que toma el resultado de la cuenta de descuento que acabamos de hacer. Y al tomarlo por ID...esta tomando el imput, osea donde aparecen o ponemos las
     palabras. En este caso, necesitabamos mostrar por ID, entonces la palabra aparece luego de poner los prompt. En el ejercicio 2, teniamos que poner las 
     palabras en los espacios en blanco (que seria el imput) para que luego apareciera por medio de alert. (Fijate que este ejercicio no tiene alert)
     */
	document.getElementById('elPrecioFinal').value = precioFinalConDescuento;
    
    //Entonces, si es mostrar por ID, acordate de como poner el document.getElementById. En el ejercicio 2, lo pusiste a la derecha, en este a la izquierda.
}
