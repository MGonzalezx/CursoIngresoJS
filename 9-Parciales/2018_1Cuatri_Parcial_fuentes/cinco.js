function mostrar()
{
	var planeta ;

	planeta = prompt("Ingrese nombre del planeta") ;

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			alert("Aca hace más calor");
			break;
		case "tierra":
			alert("Aca vivimos");
			break;
		case "marte":
		case "jupiter":
			alert("Aca hace más frio");
			break;
		default:
			alert("No es un planeta valido");
			break;
	}
}
