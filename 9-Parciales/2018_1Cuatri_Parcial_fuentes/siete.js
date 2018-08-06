function mostrar()
{
	var nota ; 
	var sexo ;
	var contador = 0 ;
	var notaMasBaja ;
	var sumaTotalDeNotas = 0 ;
	var sumaDeNotas ;
	var promedioDeNotas ;
	var contadorDeNotas = 0 ;
	var contadorDeVaronesAprobados = 0 ;
	var notaMenor = 11;
	var sexoNotaMenor ;
	
	while (contador < 5)
	{	
		contador++ ;
		nota = parseInt(prompt("Ingrese nota del estudiante # "+contador));
	
		while (nota >= 11 || nota <= -1 || isNaN(nota))
	{
			alert("Numero invalido") ;
			nota = parseInt(prompt("Error, ingrese nota valida del estudiante # "+contador));
	}
		sumaDeNotas = nota + sumaTotalDeNotas
		sumaTotalDeNotas = sumaTotalDeNotas + nota
		contadorDeNotas++ ;

		sexo = prompt("Ingrese sexo f ó m del estudiante # "+contador);
		sexo = sexo.toLowerCase()
		while (!(sexo == "f" || sexo == "m"))
	{		
			sexo = prompt("Error, ingrese nuevamente f ó m del estudiante # "+contador);
			sexo = sexo.toLowerCase() ;
	}

		if( nota < notaMenor)
		{
			notaMenor = nota ;
			sexoNotaMenor = sexo ;

		}
		



		if (nota >= 6 && sexo == "m")
		{
			contadorDeVaronesAprobados++ ;
		}

	}


	promedioDeNotas = sumaTotalDeNotas / contadorDeNotas ;


	alert("El promedio de las notas es: "+ promedioDeNotas+ "La nota más baja es: "+notaMenor+" y su sexo es: "+ sexoNotaMenor+ " La cantidad de varones que su nota fue mayor o igual a 6 es: "+ contadorDeVaronesAprobados);







}

