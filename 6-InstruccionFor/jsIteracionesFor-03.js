function mostrar()
{
		/* let repeat;
	let cant = parseInt(prompt("ingrese el número de repeticiones"));
	
	while(isNaN(cant)||cant<=0)
	{
		cant = parseInt(prompt("eso no es un número, ingrese el número de repeticiones"));
	}


	for(repeat = 1; repeat <= cant ; repeat++)
	{
		document.write("Hola UTN FRA.<br>");
	} */
	//al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

	let num;
	num = parseInt(prompt("Ingrese la cantidad de veces que quiere repetir el mensaje 'Hola UTN FRA'"));
	while(isNaN(num)||num<0)
	{
		num= parseInt(prompt("Valor invalido, ingrese un número"))
	}
	for(let i = 1; i<=num ; i++)
	{
		document.write("Hola UTN FRA<br>");
	}


}//FIN DE LA FUNCIÓN