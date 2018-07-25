function mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
		
	switch (mesDelAño)
	{
		case "Enero":
			alert("Falta para el invierno.");
			break ;
		case "Febrero":
			alert("Falta para el invierno.");
			break ;
		case "Marzo":
			alert("Falta para el invierno.");
			break ;
		case "Abril":
			alert("Falta para el invierno.");
			break ;
		case "Mayo":
			alert("Falta para el invierno.");
			break ;
		case "Junio":
			alert("Falta para el invierno.");
			break ;
		case "Julio":
			alert("Abrigate que hace frio.");
			break ;
		case "Agosto":
			alert("Abrigate que hace frio.");
			break ;			
		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break ;
		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break ;
		case "Noviembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break ;
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break ;
	}	

//alert (mesDelAño);

/* tambien para hacerlo màs rapido y sin repetir siempre el mismo alert podemos hacer esto
		case "Julio":

		case "Agosto":
			alert("Abrigate que hace frio.");
			break ;			
Se termina el break, toma que en julio O Agosto ocurre el alert

El else del switch es default. 
       	default :
       	alert("Ya pasamos el frio, ahora calor!!!.") ;
Si es que antes ya pusimos los meses anteriores al invierno y los meses de invierno. 


*/




}//FIN DE LA FUNCIÓN