function mostrar()
{
let estacion;
let destino;
let precio;
let precioFinal;
estacion = document.getElementById("txtIdEstacion").value;
destino = document.getElementById("txtIdDestino").value;
precio = 15000;

switch(destino)
{
	case "Bariloche":
		if(estacion== "Invierno")
		{
			precioFinal=precio*1.2;	
		}
		else if(estacion== "Verano")
		{
			precioFinal=precio*.8;
		}
		else
		{
			precioFinal=precio*1.1;
		}
		break;
	case "Cordoba":
		if(estacion== "Invierno")
		{
			precioFinal=precio*.9;
		}
		else if(estacion== "Verano")
		{
			precioFinal=precio*1.1;
		}
		else
		{
			precioFinal=precio;
		}
		break;
	case "Cataratas":
		if(estacion== "Invierno")
		{
			precioFinal=precio*.9;
		}
		else
		{
			precioFinal=precio*1.1;
		}
		break;
	case "Mar del plata":
		if(estacion== "Invierno")
		{
			precioFinal=precio*.8;
		}
		else if(estacion== "Verano")
		{
			precioFinal=precio*1.2;
		}
		else
		{
			precioFinal=precio*1.1;
		}
		break;
		
}

alert("El precio final es "+ precioFinal);





















/*switch(estacion)
{
	case "Invierno":
		switch(destino)
		{
		case "Bariloche":
			precioFinal=precio*1.2;
			
			break;
		case "Cataratas":
		case "Cordoba":
			precioFinal=precio*.9;
			
			break;
		case "Mar del plata":
			precioFinal=precio*.8;
			
			break;
		}
	break;
	case"Verano":
		switch(destino)
		{
			case "Bariloche":
				precioFinal=precio*.8;
				
				break;
			case "Cataratas":
			case "Cordoba":
				precioFinal=precio*1.1;
				
				break;
			case "Mar del plata":
				precioFinal=precio*1.2;
				
				break;
		}
	break;
	case "Otoño":
	case "Primavera":
		switch(destino)
		{
			case "Bariloche":
				precioFinal=precio*1.1;
				
				break;
			case "Cataratas":
				precioFinal=precio*1.1;
				
				break;
			case "Mar del plata":
				precioFinal=precio*1.1;
				
				break;
			case "Cordoba":
				precioFinal=precio;
				break;
		}
	break;
}*/
//alert("El precio final es "+ precioFinal);
/*switch(estacion)
{
	case "Invierno":
		switch(destino)
		{
		case "Bariloche":
			precioFinal=precio*1.2;
			alert("El precio final es "+ precioFinal);
			break;
		case "Cataratas":
		case "Cordoba":
			precioFinal=precio*.9;
			alert("El precio final es "+ precioFinal);
			break;
		case "Mar del plata":
			precioFinal=precio*.8;
			alert("El precio final es "+ precioFinal);
			break;
		}
	break;
	case"Verano":
		switch(destino)
		{
			case "Bariloche":
				precioFinal=precio*.8;
				alert("El precio final es "+ precioFinal);
				break;
			case "Cataratas":
			case "Cordoba":
				precioFinal=precio*1.1;
				alert("El precio final es "+ precioFinal);
				break;
			case "Mar del plata":
				precioFinal=precio*1.2;
				alert("El precio final es "+ precioFinal);
				break;
		}
	break;
	case "Otoño":
	case "Primavera":
		switch(destino)
		{
			case "Bariloche":
				precioFinal=precio*1.1;
				alert("El precio final es "+ precioFinal);
				break;
			case "Cataratas":
				precioFinal=precio*1.1;
				alert("El precio final es "+ precioFinal);
				break;
			case "Mar del plata":
				precioFinal=precio*1.1;
				alert("El precio final es "+ precioFinal);
				break;
			case "Cordoba":
				alert("El precio final es "+ precioFinal);
				break;
		}
	break;
}

/*if(estacion=="Invierno")
{
	switch(destino)
	{
		case "Bariloche":
			precioFinal=precio*1.2;
			alert("El precio final es "+ precioFinal);
			break;
		case "Cataratas":
		case "Cordoba":
			precioFinal=precio*.9;
			alert("El precio final es "+ precioFinal);
			break;
		case "Mar del plata":
			precioFinal=precio*.8;
			alert("El precio final es "+ precioFinal);
			break;
	}
}
else if(estacion=="Verano")
{
	switch(destino)
	{
		case "Bariloche":
			precioFinal=precio*.8;
			alert("El precio final es "+ precioFinal);
			break;
		case "Cataratas":
		case "Cordoba":
			precioFinal=precio*1.1;
			alert("El precio final es "+ precioFinal);
			break;
		case "Mar del plata":
			precioFinal=precio*1.2;
			alert("El precio final es "+ precioFinal);
			break;
	}
}
else
{
	switch(destino)
	{
		case "Bariloche":
			precioFinal=precio*1.1;
			alert("El precio final es "+ precioFinal);
			break;
		case "Cataratas":
			precioFinal=precio*1.1;
			alert("El precio final es "+ precioFinal);
			break;
		case "Mar del plata":
			precioFinal=precio*1.1;
			alert("El precio final es "+ precioFinal);
			break;
		case "Cordoba":
			alert("El precio final es "+ precioFinal);
	}
}*/

}//FIN DE LA FUNCIÓN