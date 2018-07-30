function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero ;
	var promedio ;

	while (respuesta != "no")
	{ 
	  numero = parseInt(prompt("Ingrese numero #")) ;

	  acumulador = acumulador + numero ;

	  contador = contador + 1 ;

	  respuesta = prompt("¿Desea incluir màs numeros?: si/no ") ;

	}

	promedio =acumulador / contador ;

	document.getElementById('suma').value= "La suma es: " + acumulador;
	document.getElementById('promedio').value= "El promedio es: " + promedio;

}//FIN DE LA FUNCIÓN