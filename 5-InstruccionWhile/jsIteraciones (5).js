function mostrar()
{

	var sexo = prompt("ingrese f ó m .");


	//Para que me lo tome en minuscula.
	sexo = sexo.toLowerCase() ;


	while (!(sexo == "f" || sexo == "m"))
	{
		sexo = prompt("Error, ingrese nuevamente f ó m.");
		sexo = sexo.toLowerCase()
	}



	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN