/*function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");			
	}

}//FIN DE LA FUNCIÓN*/

function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	if(destino=="Bariloche"||destino=="Ushuaia")
	{
		alert("Frio");
	}
	else(destino=="Cataratas"||destino=="Mar del plata")
	{
		alert("Calor");
	}
	

}//FIN DE LA FUNCIÓN