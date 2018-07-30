/*
Ingreso: 
Maria F 15
Jose M 33
Pepe M 81

Mostrar:
	Cantidad
		1. De mayores de edad =2
		2. Menores de edad = 1
		3. Mujeres = 1
		4. Cantidad de hombres = 2
	Nombre:
		5. Del Mayor.
		6. Del menor.
		7. Del hombre de menor edad.

*/
function mostrar()
{
	//definicion
	var nombre ;
	var sexo ;
	var edad ;
	var cantidad ;
	var contador ;
	var contadorMayoresDeEdad = 0 ;
	var contadorMenoresDeEdad = 0 ;
	var contadorMujeres = 0 ;
	var contadorHombres = 0 ;

	//inicializacion
	contador=0;

	while(contador<3)
	{
		//carga de datos
		contador++;
		nombre=prompt("ing nombre");
		
		sexo=prompt("ing sexo");	
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("errror,ing sexo");
		}
		
		edad=parseInt(prompt("ing edad"));	
		while(edad<0 || edad >100)
		{
			edad=parseInt(prompt("error,ing edad"));
		}

		//analisis

		if(edad	>18)
		{
			contadorMayoresDeEdad++;
		}
		else
		{
			contadorMenoresDeEdad++;

		}

		if(sexo == "f")
		{
			contadorMujeres++ ;

		}
		else
		{
			contadorHombres++ ;
		}
		if (edad > 33)
		{
			alert(nombre);
		}
		if (edad < 33)
		{
			alert(nombre);
		}
		if (edad == 81);
		{
			alert(nombre)
		}
		



	}
	//mas acciones
	//pomedio





	//mostrar
	document.write("<br>  la cantidad de mayores es : "+contadorMayoresDeEdad );
	document.write("<br>  la cantidad de menores es : "+contadorMenoresDeEdad );
	document.write("<br>  la cantidad de mujeres es : "+contadorMujeres );
	document.write("<br>  la cantidad de hombres es : "+contadorHombres );
	document.write("<br>  El nombre del menor es : "+ nombre);
	




}


