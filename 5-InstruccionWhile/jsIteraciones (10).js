function mostrar()
{
	/*

	*/

	var contador=0;
	//declarar contadores y variables 
	var numero ;
	var suma ;
	var diferencia ;
	var negativo = 0 ;
	var positivo = 0 ;
	var contadorDePositivos = 0 ;
	var contadorDeNegativos = 0 ;
	var contadorDeCeros = 0 ;
	
	
	var respuesta="si";

	while(respuesta!="no")
	{
		 contador++ ;
	  numero = parseInt(prompt("Ingrese numero #" + contador)) ;

	  if (numero < 0 )
	  {
	  	suma = numero + negativo ;
	  	negativo = negativo + numero ;
	  	contadorDeNegativos++ ;

	  }
	  
	   if (numero > 0 )
	  {
	  	suma = numero + positivo ;
	  	positivo = positivo + numero ;
	  	contadorDePositivos++ ; 
	  }
	  if (numero == 0)
	  {

	  }



		
		respuesta = prompt("¿Desea incluir màs numeros?: si/no ") ;
	}



	document.write("<br> La suma de los negativos es : " + negativo) ;
	document.write("<br> La suma de los positivos es : " + positivo)
	document.write("<br> La cantidad de negativos que hay es : " + contadorDeNegativos) ;
	document.write("<br> La cantidad de positivos que hay es : " + contadorDePositivos) ;


}//FIN DE LA FUNCIÓN