function mostrar()
{


	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":	
			alert("Falta para el invierno.");
			break;	
		case "Julio":
		case "Agosto":	
			alert("Abrigate que hace frio.");
			break;
		Default 
			alert("Ya pasamos el frio, ahora calor!!!.");					
	}


	/*if(mes=="Enero"||mes=="Febrero"||mes=="Marzo"||mes=="Abril"||mes=="Mayo"||mes=="Junio")
	{
		alert("Falta para el invierno.");
	}
	else if(mes=="Julio"||mes=="Agosto")
	{
		alert("Abrigate que hace frio.");
	}
	else
	{
		alert("Ya pasamos el frio, ahora calor!!!.");
	}*/
	
	
	
	
	


	
	/*switch(mes)
	{
		case "Enero":
			alert("Falta para el invierno.");
			break;
		case "Febrero":
			alert("Falta para el invierno.");
			break;
		case "Marzo":
			alert("Falta para el invierno.");
			break;
		case "Abril":
			alert("Falta para el invierno.");
			break;
		case "Mayo":
			alert("Falta para el invierno.");
			break;
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
			alert("Abrigate que hace frio.");
			break;
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		case "Noviembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}*/

}//FIN DE LA FUNCIÓN