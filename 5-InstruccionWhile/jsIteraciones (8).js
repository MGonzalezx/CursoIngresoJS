function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero ;
	var suma ;
	var multiplicaciòn ;

	while (respuesta != "no")
	{ 
	  contador++ ;
	  numero = parseInt(prompt("Ingrese numero #" + contador)) ;

	  if(numero > positivo )
	  {
	  	suma = numero + positivo ;
	  	positivo = positivo + numero ;
	  } 
	  if (numero < negativo)
	  	{
	  		multiplicaciòn = numero * negativo ;
	  		negativo = negativo + numero ;
	  	}
	  	
	

	   respuesta = prompt("¿Desea incluir màs numeros?: si/no ") ;

	}
	
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN