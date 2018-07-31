function mostrar()
{
	var numeroMayor ;
	var numeroMenor ; 
	var contador = 1;
	// declarar variables
	var numero ;
	var respuesta ='si';

	numeroMayor = parseInt(prompt("Ingrese numero #" + contador));
	numeroMenor = numeroMayor
	respuesta = otroNumero() ;
	while(respuesta !='no')
	{ 
		contador++ ;
	 	numero = parseInt(prompt("Ingrese numero #" + contador)) ;

	 if (numero >= numeroMayor)
	 {
	 	numeroMayor = numero ;
	 }
	 else
	 	if(numero <= numeroMenor)
	 {
	 	numeroMenor = numero ;
	 }

		
	respuesta = otroNumero() ;
	}

	document.getElementById('maximo').value = numeroMayor ;
	document.getElementById('minimo').value = numeroMenor ;

}//FIN DE LA FUNCIÓN
function otroNumero()
{
	prompt("¿Desea incluir màs numeros?: si/no ") ;
}