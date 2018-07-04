/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ var numeroUno;
  var numeroDos;
  var resultado;
  numeroUno = document.getElementById('numeroUno').value;
  numeroDos = document.getElementById('numeroDos').value;
  
  numeroUno = parseInt(numeroUno, 0);
  numeroDos = parseInt(numeroDos, 0);
  
//El parseInt funciona parecido a un prompt. Nos devuelve algo. En este caso el numero entero para poderlo usar.

  resultado = numeroUno + numeroDos ;
  alert("la suma es "+resultado);
  
//resultado = parseInt(numeroUno, 0)+parseInt(numeroDos, 0);. Tambien sirve.

  /*El segundo numero (base) es el que modifica la variable, al no poner nada o solo pero 0, queda entero. Si por ejemplo 
  ponemos 10, los hace decimal.
  */
}

