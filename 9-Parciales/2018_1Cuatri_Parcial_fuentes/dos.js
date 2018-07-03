function mostrar()
{ 
  var nombre;
  var localidad;
  nombre=document.getElementById('elNombre').value;
  localidad=document.getElementById('laLocalidad').value;
  alert("Usted es "+nombre+" y vive en la localidad de "+localidad);

//Me pidieron que solo use alert, sin prompt. Tengo que tener en cuenta y recordar el document.getElementById('') y tampoco olvidarme del .value del final. 
//Cuando el ejercicio me da espacios en blanco (osea los imputs), usar esta forma de resolverlo. 
}
