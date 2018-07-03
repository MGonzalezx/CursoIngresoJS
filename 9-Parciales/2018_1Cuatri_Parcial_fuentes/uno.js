
function mostrar()
{//Me pide dos variables, un ancho y largo. 
 
 //Al final estaba equivocado, necesito 3 variables...ancho, largo y perimetro. Al ancho y largo los junto con prompt, para que luego la ventana emergente me pregunte sus medidas

 /*Para sumar dos variables, tengo que usarlos como números (en este caso los tuve que multiplicar por 2 ya que son dos lados iguales en un rectangulo)
  En el caso que no tenga que multiplicar por dos, solo tendria que multiplicarlo por 1. Entonces....perimetro es igual a la suma de ancho por dos y largo por dos.
  Osea: perimetro=(ancho*2)+(largo*2); Si no estoy equivocado, al multipicarlos, forzamos a Java.S. a que tome los valores como número.
  
  Luego en alert, solo tenes que poner la variable perimetro, que ya va estar definida por la suma que hiciste anteriormente, tambien podes poner algo antes de
  la variable perimetro para que quede más ordenado...como por ejemplo: "El perimetro de rectángulo es :" y luego con el "+" unirias las dos cosas. Entonces nos 
  quedaria asi: alert("El perimetro del rectángulo es: "+perimetro); En este caso, al no forzar a Java.S. a que tome los valores como número, exitosamente nos da el resultado
  al que queremos llegar
  */

	var ancho;
	var largo;
	var perimetro;
    ancho=prompt("Ingrese ancho del rectángulo");
    largo=prompt("Ingrese largo del rectángulo");
    perimetro= (ancho*2)+(largo*2);
    alert("El perimetro del rectángulo es: "+perimetro);

    //Errores, hacer alert(ancho*2)+(largo*2); no esta bien. Me va a dar solo el resultado de ancho*2
    //Errores, hacer alert (ancho+largo); solo me va a dar los dos numero juntos. Osea si ancho es 10 y largo 11, me daria 1011 en este caso no uso las var como numeros
    
    /*Otra forma de hacerlo, Sacando la tercera variable llamada perimetro y luego en alert poner alert("El perimetro del rectángulo es: "+((ancho*2)+(largo*2)));
    Da un resultado correcto. Pero creo que toma mucho más tiempo y trabajo, ademas de que te podes confundir con los (), en cambio usando variables es mucho más facil
    */ 
}
