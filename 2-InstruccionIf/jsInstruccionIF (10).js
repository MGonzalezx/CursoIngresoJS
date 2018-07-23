function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota ;

	nota = Math.round(Math.random()*10) ;

	if (nota >= 9 && nota <= 10)
	{
		alert("Excelente " + nota);
	}
	else if (nota > 4 && nota <= 8)
	{
		alert("Aprobò " + nota);
	}
	else 
	{
		alert("Vamos, la proxima se puede " + nota);
	}

}//FIN DE LA FUNCIÓN