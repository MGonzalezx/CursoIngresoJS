/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{ var nombre ;
	nombre = prompt ("Ingrese nombre") ;
	document.getElementById('elNombre').value = nombre ;
	
	/*Fijarme en el id del imput, y nombrar la variable igual o similar al id. En este caso el ID era elNombre 
	y ademas en el imput decia "Su nombre"
	*/
}

