/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad ;
 	var marca ;
 	var precioLampara;
 	var precioSinDescuento ;
 	var descuento ;
 	var precioFinal ;
 	var ingesosBrutos;
 	
 	cantidad = document.getElementById('Cantidad').value ;
 	marca = document.getElementById('Marca').value ;

 	precioLampara = 35 ;
 	descuento = 1 ;
 	precioSinDescuento = cantidad * precioLampara ;

 	cantidad =parseInt(cantidad, 0) ;

 	switch(cantidad)
 	{
 		case 1:
 		case 2:
 			break;
 		case 3:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuento = 0.85 ;
 					break;
 				case "FelipeLamparas":
 					descuento = 0.90 ;
 					break;
 				default:
 					descuento = 0.95 ;
 					break;
 			}
 				break ;	  
 		case 4:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					descuento = 0.75;
 					break;
 				default:
 					descuento = 0.80;
 					break;
 			}
 			break ;
 		case 5:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					descuento = 0.60;
 					break;
 				default:
 					descuento = 0.70;
 					break;
 			}
 			break;
 		default:
 			descuento = 0.50 ;
 			break;			

 			
 	}
			
 	    

 	   precioFinal = precioSinDescuento * descuento ;
 	   ingesosBrutos = precioFinal * 0.10
 	   if(precioFinal > 120)
 	   {
 	   	document.getElementById('precioDescuento').value = precioFinal + ingesosBrutos ;
 	   	alert("Usted pagó "+ingesosBrutos+" de IBB") ;
 	   }
 	   else
 	   {
 	   	document.getElementById('precioDescuento').value = precioFinal ;
 	   }

 













 	/* if (cantidad >= 6)
 	{
 		alert(precioSinDescuento - (50*precioSinDescuento/100));
 	}
 	else 
 		if (cantidad == 5)
 		{
 			if (marca != "ArgentinaLuz")
 			{
 				alert(precioSinDescuento - (30*precioSinDescuento/100)) ;
 			}
 		   
 		   if (marca == "ArgentinaLuz")
 		   {
 		   		alert(precioSinDescuento - (40*precioSinDescuento/100)) ;
 		   }	

 	else 
 		if (cantidad == 4)
 		{
 			if (marca != "ArgentinaLuz" || marca != "FelipeLamparas")
 			{
 				alert(precioSinDescuento - (20*precioSinDescuento/100)) ;
 			}

 			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 			{
 				alert(precioSinDescuento - (25*precioSinDescuento/100)) ;
 			}
 		} 

 	else
 		if (cantidad == 3)
 		{
 			alert(precioSinDescuento - (5*precioSinDescuento/100)) ;

 			if (marca == "ArgentinaLuz")
 			{
 				alert(precioSinDescuento - (15*precioSinDescuento/100)) ;
 			}

 			if (marca == "FelipeLamparas")
 			{
 				alert(precioSinDescuento - (10*precioSinDescuento/100)) ;
 			}
 		}


 		}



*/

 }
