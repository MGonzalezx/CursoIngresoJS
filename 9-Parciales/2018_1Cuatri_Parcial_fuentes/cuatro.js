function mostrar()
{ var numeroUno ;
  var numeroDos ;
  
  numeroUno = prompt("Ingrese primer numero") ;
  numeroDos = prompt("Ingrese segundo numero") ;

  suma =parseInt(numeroUno, 0) + parseInt(numeroDos, 0) ;

  if(numeroUno == numeroDos)
  {
	alert(numeroUno + numeroDos);
  } 
  else if(suma > 10)
  {
  	alert("La suma es: "+suma+" y supero el 10"); 
  }
  else if(numeroUno < numeroDos)
  {
  	alert(suma);
  }
  else
  {
  	alert(numeroUno - numeroDos)
  }

// Primero prompt despues parseInt
  
}
