/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno ;
	var numeroDos ; 
    var resultado ;

	numeroUno = document.getElementById('numeroUno').value ;
	numeroDos = document.getElementById('numeroDos').value ;

	numeroUno = parseInt(numeroUno, 0);
	numeroDos = parseInt(numeroDos, 0);

	resultado = numeroUno+numeroDos ;

	alert("La suma es "+ resultado);
}

function restar()
{   var numeroUno ;
	var numeroDos ;
    var resultado ;
    
	numeroUno = document.getElementById('numeroUno').value ;
	numeroDos = document.getElementById('numeroDos').value ;

	numeroUno = parseInt(numeroUno, 0);
	numeroDos = parseInt(numeroDos, 0);
	
	resultado = numeroUno - numeroDos ;
	
	alert("La resta es "+ resultado);
}

function multiplicar()
{   var numeroUno ;
	var numeroDos ;
    var resultado ;
    
	numeroUno = document.getElementById('numeroUno').value ;
	numeroDos = document.getElementById('numeroDos').value ;

	numeroUno = parseInt(numeroUno, 0);
	numeroDos = parseInt(numeroDos, 0);
	
	resultado = numeroUno * numeroDos ;

	alert("El producto es "+resultado);
}

function dividir()
{   var numeroUno ;
	var numeroDos ;
    var resultado ;
    
	numeroUno = document.getElementById('numeroUno').value ;
	numeroDos = document.getElementById('numeroDos').value ;

	numeroUno = parseInt(numeroUno, 0);
	numeroDos = parseInt(numeroDos, 0);

    resultado = numeroUno / numeroDos ;

    alert("El cociente es "+ resultado); 	
}

