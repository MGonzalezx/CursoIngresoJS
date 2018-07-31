function mostrar()
{
	var hora ;

	hora = parseInt(prompt("Ingrese hora")) ;

	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			if(hora < 24)
			{
				alert("Es de noche, a dormir");
			}
			else
			{
				alert("Es de noche");
			}
			break;
		default:
			alert("No es una hora valida");
			break;	



	}
}
