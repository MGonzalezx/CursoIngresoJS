function mostrar()
{
	/*

	*/

	var contador=0;
	//declarar contadores y variables 
	var numero ;
	var sumaPositivos ;
	var sumaNegativos ;
	var diferencia ;
	var negativo = 0 ;
	var positivo = 0 ;
	var contadorDePositivos = 0 ;
	var contadorDeNegativos = 0 ;
	var contadorDeCeros = 0 ;
	var contadorDePares = 0 ;
	var promedioPositivos ;
	var promedioNegativos ;

	
	
	var respuesta="si";

	while(respuesta!="no")
	{
		 contador++ ;
	  numero = parseInt(prompt("Ingrese numero #" + contador)) ;

	  if (numero < 0 )
	  {
	  	sumaNegativos = numero + negativo ;
	  	negativo = negativo + numero ;
	  	contadorDeNegativos++ ;

	  }
	  
	  else  if (numero > 0 )
	  {
	  	sumaPositivos = numero + positivo ;
	  	positivo = positivo + numero ;
	  	contadorDePositivos++ ; 
	  }
	  else
	  {
	  	contadorDeCeros++ ;
	  }

	  if (numero % 2 == 0)
	  {
	  	contadorDePares++ ;
	  }
	  
	  



		
		respuesta = prompt("¿Desea incluir màs numeros?: si/no ") ;
	}
	
	promedioPositivos = sumaPositivos / contadorDePositivos ;
	promedioNegativos = sumaNegativos / contadorDeNegativos ;
	diferencia = sumaPositivos - sumaNegativos
	


	document.write("<br> La suma de los negativos es : " + negativo) ;
	document.write("<br> La suma de los positivos es : " + positivo)
	document.write("<br> La cantidad de negativos que hay es : " + contadorDeNegativos) ;
	document.write("<br> La cantidad de positivos que hay es : " + contadorDePositivos) ;
	document.write("<br> La cantidad de ceros es : " + contadorDeCeros) ;
	document.write("<br> La cantidad de pares es : " + contadorDePares) ;
	document.write("<br> El promedio de los positivos es : " + promedioPositivos) ;
	document.write("<br> El promedio de los negativos es : " + promedioNegativos) ;
	document.write("<br> La diferencia entre los positivos y negativos es : " + diferencia) ;

}//FIN DE LA FUNCIÓN