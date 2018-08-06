function mostrar()
{	//Numero primo
	var numeroIngresado ;
	var numerosAnteriores ;
	var esPrimo ;
	var numeroRecorrido ;


	numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(numeroRecorrido = numeroIngresado ; numeroRecorrido > 1 ; numeroRecorrido--)
	{
		esPrimo = 0 ;
	
		for(numerosAnteriores = 2 ; numerosAnteriores < numeroRecorrido ; numerosAnteriores++)
		{
		
			if(numeroRecorrido % numerosAnteriores == 0)
		{
			
			esPrimo = 1 ;
			break ;
		}
		}

		if(esPrimo == 0)
	{
		console.log(numeroRecorrido + " Es un numero primo");
	}
	
	}
	
	
	











	/* for(numerosAnteriores - numerosIngresados - 1 ; numerosAnteriores > 1 ; numerosAnteriores--)
	{
		
		if(numeroIngresado % numerosAnteriores == 0)
		{
			console.log(numerosAnteriores);
			esPrimo = 1 ;
			break ;
		}
	}

	if(esPrimo == 0)
	{
		console.log(numeroIngresado + " Es un numero primo");
	}
	else
	{
		console.log(numeroIngresado + " No es un numero primo");
	} */



}//FIN DE LA FUNCIÓN