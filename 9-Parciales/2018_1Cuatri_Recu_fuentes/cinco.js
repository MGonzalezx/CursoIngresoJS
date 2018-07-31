function mostrar()
{   
	var diaSemana;

	
	diasemana = prompt("Ingrese dia de la semana.");


	
	switch(diasemana)
	{
		case "Sabado":
		case "Domingo":
			alert("Buen finde");
			break ;
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			alert("A trabajar");
			break ;
		default:
			alert("No es un dia valido");

	}
}
