function mostrar()
{
	var nota ;

	nota = parseInt(prompt("Ingrese Nota"));

	switch(nota)
	{
		case 1:
		case 2:
		case 3:
			alert("La proxima se puede");
			break;
		case 4:
		case 5:
		case 6:
			if(nota < 5)
			{
				alert("Raspando, debes preocuparte más");
			}
			else
			alert("Raspando");
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			if(nota > 8)
			{
				alert("Muy bien, aprobó");
			}
			else
				alert("Aprobó");
			break;
		default:
			alert("La nota no es valida");
			break;

	}
}
