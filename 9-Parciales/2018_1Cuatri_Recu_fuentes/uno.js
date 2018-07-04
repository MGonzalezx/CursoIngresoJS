
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese base del triangulo");
	altura = prompt("Ingrese altura del triangulo");

	perimetro = base*3 ;
	superficie = (base*altura)/2 ;

	alert ("La superficie es "+ superficie+ " y el perimetro es "+ perimetro) ;

}
