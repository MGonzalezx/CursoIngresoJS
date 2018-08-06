function mostrar()
{
	var nombre ;
	var peso ;
	var temperatura ;
	var respuesta = "si" ;
	var contador = 0 ;
	var contadorTemperaturasPares = 0 ;
	var contadorAnimalesBajoCero = 0 ;
	var pesoAnimalMasPesado = 1 ;
	var nombreAnimalMasPesado ;
	var temperaturaAnimalMasPesado ;
	var promedioPeso ;
	var pesoTotal = 0 ;
	var sumaDePesos ;
	var animalMasPesadoBajoCero = 1  ;
	var animalMenosPesadoBajoCero = 1000 ;
	var pesosEnBajoCero = 0 ;



//cargo los datos

	while(respuesta != "no")
	{ 	contador++ ;
		nombre = prompt("Ingrese nombre del animal #"+contador) ;

		peso = prompt("Ingrese peso del animal #"+contador);
		peso = parseInt(peso) ;
		

		
		while(peso <= 0  || peso >= 1001 )
		{
			alert("Peso invalido");
			peso = prompt("Error, Ingrese peso del animal #"+contador);
			peso = parseInt(peso);
		}
		sumaDePesos = peso + pesoTotal ;
		pesoTotal = pesoTotal + peso ;

		
		temperatura = prompt("Ingrese temperatura del habitat del animal #"+contador);
		temperatura = parseInt(temperatura);
		while(temperatura <= -31 || temperatura >= 31)
		{	alert("temperatura invalida");
			temperatura = prompt("Error, ingrese temperatura del habitat del animal #"+contador);
			temperatura = parseInt(temperatura);
		}

		respuesta = prompt("¿Desea seguir ingresando màs animales? si / no");
	}

//Analisis
	if(temperatura % 2 == 0)
	{
		contadorTemperaturasPares++ ;
	}

	if(peso > pesoAnimalMasPesado)
	{
		nombreAnimalMasPesado = nombre
		temperaturaAnimalMasPesado = temperatura

	}
	if(temperatura < 0)
	{
		contadorAnimalesBajoCero++ ;
	}
	if (peso > animalMasPesadoBajoCero && temperatura < 0)
	{
		animalMasPesadoBajoCero = peso
	}
	if (peso < animalMenosPesadoBajoCero && temperatura < 0)
	{
		animalMenosPesadoBajoCero = peso
	}

	




//Otros calculos
	promedioPeso = pesoTotal / contador

	document.write("<br> La cantidad de temperaturas pares es: "+ contadorTemperaturasPares);
	document.write("<br> El nombre del animal màs pesado es: " + nombreAnimalMasPesado + " y su temperatura es: "+ temperaturaAnimalMasPesado);
	document.write("<br> La cantidad animles que viven bajo 0 grados es: "+ contadorAnimalesBajoCero);
	document.write("<br> El promedio de los pesos de todos los animales es: "+ promedioPeso);
	document.write("<br> El peso maximo de los animales que viven bajo 0 es: "+ animalMasPesadoBajoCero);
	document.write("<br> El peso minimo de los animales que viven bajo 0 es: "+ animalMasPesadoBajoCero);




}
