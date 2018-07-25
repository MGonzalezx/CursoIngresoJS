function mostrar()
{	
	var numero = parseInt(prompt("ingrese un número entre 0 y 10.")) ;

	while(numero >= 11 || numero <= -1 || isNaN(numero)) //Cuando el usuario no pone un numero usamos el NaN
	{
		alert("Numero invalido");
		numero = parseInt(prompt("Error, reingrese un número entre 0 y 10."));
			}

	document.getElementById('Numero').value = numero


}//FIN DE LA FUNCIÓN