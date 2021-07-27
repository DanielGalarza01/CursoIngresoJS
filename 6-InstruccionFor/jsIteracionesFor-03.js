function mostrar()
{
	let repeat;
	let cant = parseInt(prompt("ingrese el número de repeticiones"));
	
	while(isNaN(cant)||cant<=0)
	{
		cant = parseInt(prompt("eso no es un número, ingrese el número de repeticiones"));
	}


	for(repeat = 1; repeat <= cant ; repeat++)
	{
		document.write("Hola UTN FRA.<br>");
	}
	


}//FIN DE LA FUNCIÓN